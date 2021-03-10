## 前言

node 源码中有一些常见的，有趣的代码片段，文本将对这些内容进行解释、记录。了解这些既可以拓展无用的知识点，又可以方便后续阅读源码。

### V8_LIKELY & V8_UNLIKELY

`V8_LIKELY & V8_UNLIKELY` 在源码中很常见，比如下面代码片段：

```cpp
template <class T>
Local<T> MaybeLocal<T>::ToLocalChecked() {
  if (V8_UNLIKELY(val_ == nullptr)) V8::ToLocalEmpty();
  return Local<T>(val_);
}
```

它们的定义是：

```cpp
#if V8_HAS_BUILTIN_EXPECT
# define V8_UNLIKELY(condition) (__builtin_expect(!!(condition), 0))
# define V8_LIKELY(condition) (__builtin_expect(!!(condition), 1))
#else
# define V8_UNLIKELY(condition) (condition)
# define V8_LIKELY(condition) (condition)
#endif
```

所以核心其实是 `__builtin_expect`，它是 GCC 编译器 [内置的函数](https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html#index-_005f_005fbuiltin_005fexpect)

它的作用是，比如有下面代码：

```cpp
if (__builtin_expect(x, 0)) {
    foo();
    ...
} else {
    bar();
    ...
}
```

生成的汇编代码可能大致是：

```asm
  cmp   $x, 0
  jne   _foo
_bar:
  call  bar
  ...
  jmp   after_if
_foo:
  call  foo
  ...
after_if:
```

> 例子取自：[What is the advantage of GCC's __builtin_expect in if else statements?](https://stackoverflow.com/questions/7346929/what-is-the-advantage-of-gccs-builtin-expect-in-if-else-statements)

CPU 加载指令的时候，并不是一条一条加载的，为了性能会一次预读一定数量的指令，这样当加载第一条 `cmp   $x, 0` 指令的时候，`_bar` 的指令就也一并被加载了。我们注意到，其实在源码中，`bar` 是在 `foo` 后面的，之所以有这样的输出，就是我们通过 `__builtin_expect(x, 0)` 告诉编译器，这个条件判断在实际业务执行中，大概率会是 `false`，因此可以将 `else` 部分的指令放前置，可以加速 CPU 的执行

更多拓展可以参考：

- [CPU branch predictor](http://en.wikipedia.org/wiki/Branch_predictor)
- [How much do __builtin_expect(), likely(), and unlikely() improve performance?](http://blog.man7.org/2012/10/how-much-do-builtinexpect-likely-and.html)
- [C++ attribute: likely, unlikely](https://en.cppreference.com/w/cpp/language/attributes/likely)
