# Libuv 之 - 只看这篇是不够的

## Linux

> As an asynchronous event-driven JavaScript runtime, Node.js is designed to build **scalable network applications**
>
> [About Node.js](https://nodejs.org/en/about/#about-node-js)

Node.js 立志可以构建一个具有伸缩性的网络应用程序，目前的服务端环境主要还是 Linux，所以接下来将以 libuv 的 Linux 实现作为分析的切入点

## epoll

epoll 是由 Linux 内核提供的一个系统调用（system call），我们的应用程序可以通过它，告诉系统帮助我们同时监控多个文件描述符，当这其中的一个或者多个文件描述符的 I/O 可操作状态改变时，我们的应用程序会接收到来自系统的事件提示（event notification）

### 事件循环

我们通过一小段伪代码来演示使用 epoll 时的核心步骤：

```cpp
// 创建 epoll 实例
int epfd = epoll_create(MAX_EVENTS);
// 像 epoll 实例中添加需要监听的文件描述符
epoll_ctl_add(epfd, listen_sock, EPOLLIN | EPOLLOUT | EPOLLET);

while(1) {
  // 等待来自 epoll 的通知，通知会在其中的文件描述符状态改变时
  // 由系统通知应用。通知的形式如下：
  //
  // epoll_wait 调用不会立即返回，系统会在其中的文件描述符状态发生
  // 变化时返回
  //
  // nfds 表示发生变化的文件描述符数量
  // events 会保存当前的事件，它的数量就是 nfds
  int nfds = epoll_wait(epfd, events, MAX_EVENTS, -1);

  // 遍历 events，对事件作出符合应用预期的响应
  for (int i = 0; i < nfds; i++) { 
    // consume events[i]
  }
}
```

> 完整例子见 [epoll-echo-server](https://github.com/going-merry0/epoll-echo-server)

上面的代码可以大致概括为下图：

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7938926095/59a4/fb8a/04fb/12af868c3b037ed48b518a77a2b9e400.png)

如此一来，也出现了「事件循环」的概念，libuv 中的事件循环实现，深受它的影响

说道 epoll，不得不提它的两种触发模式：水平触发（Level-triggered）、边缘触发（Edge-triggered）。因为它们关系到 epoll 的事件触发机制，且名字取得有些晦涩

### 水平触发

这两个术语都源自电子学领域，我们从它们的原始含义开始理解

首先是水平触发：

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7938371959/5f61/4e18/99a7/0ebb4668b4fc7cc3ba0dca5610f5dfa2.png)

> [Electrical Concepts](https://electricalbaba.com/edge-triggering-and-level-triggering/)

上图是表示电压变化的时序图，VH 表示电压的峰值，VL 表示电话的谷值。水平触发的含义是，随着时间的变化，只要电压处于峰值，系统就会激活对应的电路（触发）

### 边缘触发

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7938387141/a1a4/0aed/23ba/d0effdb9b3210269dc488f89c9a16a87.png)

> [Electrical Concepts](https://electricalbaba.com/edge-triggering-and-level-triggering/)

上图依然是表示电压变化的时序图，不过激活电路（触发）的条件是电压的**改变**，即电压由 VH -> VL、VL -> VH，在图中通过**边**来表示这个变化，即 Rising edge 和 Falling edge

我们可以大致理解它们的形式与差别，再结合下面的 epoll 中的表现进行理解

### 在 epoll 中

回到 epoll 中，作为原始含义的衍生，它们当然还是具有类似电子学领域中的含义

我们通过一个例子来理解，比如我们有一个 fd 表示刚建立的客户端连接，随后客户端给我们发送了 5 bytes 的内容，

如果是水平触发：

- 我们的应用会被系统唤醒，因为 fd 此时状态变为了可读
- 我们从系统的缓冲区中读取 1 byte 的内容，并做了一些业务操作
- 进入到新的一次事件循环，等待系统下一次唤醒
- 系统继续唤醒我们的应用，因为缓冲区还有未读取的 4 bytes 内容

如果是边缘触发：

- 我们的应用会被系统唤醒，因为 fd 此时状态变为了可读
- 我们从系统的缓冲区中读取 1 byte 的内容，并做了一些业务操作
- 进入到新的一次事件循环，等待系统下一次唤醒
- 此时系统并不会唤醒我们的应用，直到下一次客户端发送了一些内容，比如发送了 2 bytes
- 系统唤醒我们的应用，此时缓冲区有 6 bytes = (4 + 2) bytes 

我们很难将水平触发、边缘触发的字面意思与上面的行为联系起来，好在我们已经预先了解过它们在电子学领域的含义

水平触发，因为已经是可读状态，所以它会一直触发，直到我们读完缓冲区，且系统缓冲区没有新的客户端发送的内容；边缘触发对应的是**状态的变化**，每次有新的客户端发送内容，都会设置可读状态，因此只会在这个时机触发

水平触发是 epoll 默认的触发模式，并且 libuv 中使用的也是水平触发。在了解了水平触发和边缘触发的区别后，我们其实就可以猜测 libuv 使用水平触发而不是边缘触发背后的考量：

如果是边缘触发，虽然在 epoll 的固有能力上，我们不被要求一次读取完缓冲区的内容（可以等到下一次客户端发送内容时继续读取），但是实际业务中，客户端此时很可能在等待我们的响应（可以结合 HTTP 协议理解），而我们还在等待客户端的下一次写入，因此会陷入死锁的逻辑。所以一次读取完缓冲区的内容几乎就成了边缘触发模式下的必选方式，这就不可避免的造成其他回调的等待时间变长，让 CPU 时间分配在各个回调之间显得不够均匀

### 局限性

epoll 并不能够作用在所有的 IO 操作上，比如文件的读写操作，就无法享受到 epoll 的便利性

所以 libuv 的工作可以大致概括为：

- 将各种操作系统上的类似 epoll 的系统调用（比如 Unix 上的 kqueue 和 Windows 上的 IOCP）抽象出统一的 API（内部 API）
- 对于可以利用系统调用的 IO 操作，优先使用统一后的 API
- 对于不支持或者支持度不够的 IO 操作，使用线程池（Thread pool）的方式模拟出异步 API
- 最后，将上面的细节封装在内部，对外提供统一的 API

## libuv

除去兼容性方面的工作，单以 Linux 平台来看，libuv 主要工作就是两部分：

- 一部分自然是围绕 epoll，处理那些被 epoll 支持的 IO 操作
- 一部分就是线程池（Thread poll），处理那些不被 epoll 支持的 IO 操作

我们可以结合 libuv 的架构图来看

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7941003946/3336/e900/8dc0/e79e4fa61877a6cb5eebb9bba7fb96cb.png)
> 引用自 [libuv - Design overview](http://docs.libuv.org/en/v1.x/design.html)

### event-loop

我们将以 event-loop 着手分析上面两个工作的实现细节，因为它是我们深入细节时面对的第一个障碍

下面这幅图描述了 event-loop 内部的工作：

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7941149650/166f/78e5/94d7/cf0de3817e3d4db037e4b05b5c291074.png)
> 引用自 [libuv - Design overview](http://docs.libuv.org/en/v1.x/design.html)

单看流程图可能不够具体，下面是对应的 libuv 内部的实现 [完整内容](https://github.com/libuv/libuv/blob/v1.x/src/unix/core.c#L365)：

```cpp
int uv_run(uv_loop_t* loop, uv_run_mode mode) {
  int timeout;
  int r;
  int ran_pending;

  r = uv__loop_alive(loop);
  if (!r) uv__update_time(loop);

  // 是循环，没错了
  while (r != 0 && loop->stop_flag == 0) {
    uv__update_time(loop);
    // 处理 timer 队列
    uv__run_timers(loop);
    // 处理 pending 队列
    ran_pending = uv__run_pending(loop);
    // 处理 idle 队列
    uv__run_idle(loop);
    // 处理 prepare 队列
    uv__run_prepare(loop);

    // 执行 io_poll
    uv__io_poll(loop, timeout);
    uv__metrics_update_idle_time(loop);

    // 执行 check 队列
    uv__run_check(loop);
    // 执行 closing 队列
    uv__run_closing_handles(loop);

    r = uv__loop_alive(loop);
    if (mode == UV_RUN_ONCE || mode == UV_RUN_NOWAIT) break;
  }

  return r;
}
```

之所以各种形式的回调（比如 `setTimeout`，`setImmediate`）在优先级上会有差别，就在于它们使用的是不同的队列，而不同的队列在每次事件循环的迭代中的执行顺序不同

### Handle 和 Request

按照官网的描述，它们是对 event-loop 中执行的操作的抽象，前者表示需要长期存在的操作，后者表示短暂的操作。单看文字描述可能不太好理解，我们看一下它们的使用方式有何不同

对于 Handle 表示的长期存在的操作来说，它们的 API 具有类似下面的形式：

```cpp
// IO 操作
int uv_poll_init_socket(uv_loop_t* loop, uv_poll_t* handle, uv_os_sock_t socket);
int uv_poll_start(uv_poll_t* handle, int events, uv_poll_cb cb);
int uv_poll_stop(uv_poll_t* poll);

// timer
int uv_timer_init(uv_loop_t* loop, uv_timer_t* handle);
int uv_timer_start(uv_timer_t* handle, uv_timer_cb cb, uint64_t timeout, uint64_t repeat);
int uv_timer_stop(uv_timer_t* handle);
```

大致都有：初始化 -> 开始 -> 停止，这三个步骤（并不是全部）。很好理解吧，因为是长期存在的操作，它开始了就会持续被处理，所以需要安排一个「停止」的 API

而对于 Request 表示的短暂操作来说，比如域名解析操作：

```cpp
int uv_getaddrinfo(uv_loop_t* loop, uv_getaddrinfo_t* req, uv_getaddrinfo_cb getaddrinfo_cb, /* ... */);
```

域名解析操作的交互形式是，我们提交需要解析的地址，方法会范围解析的结果，这样的感觉似乎有点 HTTP 1.0 请求的影子，所以按「请求」来命名就变得具体了

不过 Handle 和 Request 两者不是互斥的概念，Handle 内部实现可能也用到了 Request。因为一些宏观来看的长期操作，在每个时间切片内是可以看成是 Request 的

### timer

我们通过 timer 开放出来的 API 为线索，来分析它的内部实现：

```cpp
int uv_timer_init(uv_loop_t* loop, uv_timer_t* handle);
int uv_timer_start(uv_timer_t* handle, uv_timer_cb cb, uint64_t timeout, uint64_t repeat);
int uv_timer_stop(uv_timer_t* handle);
```

`uv_timer_init` 没有什么特殊的地方，只是初始化一下 `handle` 的状态，并将其添加到 `loop->handle_queue` 中

`uv_timer_start` 内部做了这些工作：

```cpp
int uv_timer_start(uv_timer_t* handle,
                   uv_timer_cb cb,
                   uint64_t timeout,
                   uint64_t repeat) {
  uint64_t clamped_timeout;

  // loop->time 表示 loop 当前的时间。loop 每次迭代开始时，会用当次时间更新该值
  // clamped_timeout 就是该 timer 未来超时的时间点，这里直接计算好，这样未来就不需要
  // 计算了，直接从 timers 中取符合条件的即可
  if (clamped_timeout < timeout)
    clamped_timeout = (uint64_t) -1;

  handle->timer_cb = cb;
  handle->timeout = clamped_timeout;
  handle->repeat = repeat;
  
  // 除了预先计算好的 clamped_timeout 以外，未来当 clamped_timeout 相同时，使用这里的
  // 自增 start_id 作为比较条件来觉得 handle 的执行先后顺序
  handle->start_id = handle->loop->timer_counter++;

  // 将 handle 插入到 timer_heap 中，这里的 heap 是 binary min heap，所以根节点就是
  // clamped_timeout 值（或者 start_id）最小的 handle
  heap_insert(timer_heap(handle->loop),
              (struct heap_node*) &handle->heap_node,
              timer_less_than);
  // 设置 handle 的开始状态
  uv__handle_start(handle);

  return 0;
}
```

`uv_timer_start` 内部做了这些工作：

```cpp
int uv_timer_stop(uv_timer_t* handle) {
  if (!uv__is_active(handle))
    return 0;

  // 将 handle 移出 timer_heap，和 heap_insert 操作一样，除了移出之外
  // 还会维护 timer_heap 以保障其始终是 binary min heap
  heap_remove(timer_heap(handle->loop),
              (struct heap_node*) &handle->heap_node,
              timer_less_than);
  // 设置 handle 的状态为停止
  uv__handle_stop(handle);

  return 0;
}
```

到目前为止，我们已经知道所谓的 `start` 和 `stop` 其实可以粗略地概括为，往属性 `loop->timer_heap` 中插入或者移出 handle，并且这个属性使用一个称为 binary min heap 的数据结构。binary min heap 的细节我们可以不用去深究，总之它就是保证始终把最先超时的 handle 放在第一位

然后我们再回顾上文的 `uv_run`：

```cpp
int uv_run(uv_loop_t* loop, uv_run_mode mode) {
  // ...
  while (r != 0 && loop->stop_flag == 0) {
    // ...
    uv__update_time(loop);
    uv__run_timers(loop);
    // ...
  }
  // ...
}
```

`uv__update_time` 我们已经提及过了，就是在循环开头阶段、使用当前时间设置属性 `loop->time`

我们只需要最后看一下 `uv__run_timers` 的内容，就可以串联整个流程：

```cpp
void uv__run_timers(uv_loop_t* loop) {
  struct heap_node* heap_node;
  uv_timer_t* handle;

  for (;;) {
    // 取根节点，该值保证始终是所有待执行的 handle
    // 中，最先超时的那一个
    heap_node = heap_min(timer_heap(loop));
    if (heap_node == NULL)
      break;

    handle = container_of(heap_node, uv_timer_t, heap_node);
    if (handle->timeout > loop->time)
      break;

    // 停止、移出 handle、顺便维护 timer_heap
    uv_timer_stop(handle);
    // 如果是需要 repeat 的 handle，则重新加入到 timer_heap 中
    // 会在下一次事件循环中、由本方法继续执行
    uv_timer_again(handle);
    // 执行超时 handle 其对应的回调
    handle->timer_cb(handle);
  }
}
```

### pending

### idle

### prepare

### io poll

### check

### closing


Disk IO 是如何做到异步的

- 线程池启动
- 如何调度
- 如何触发回调
