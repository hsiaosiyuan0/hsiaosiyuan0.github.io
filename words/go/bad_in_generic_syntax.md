# Go 语言中的 Generic 设计缺陷

## 歧义

Go 语言终于有了 Generic 实现，可我发现它有个让我需要花时间去习惯的缺陷

比如说，下面这段代码是使用了泛型语法的：

```Go
package main

import "fmt"

type Numbers interface {
	int | uint8 | float64
}

func max[T Numbers](a, b T) T {
	if a > b {
		return a
	}
	return b
}

func main() {
	a := 0
	b := 1
	fmt.Println(max(a, b))      // T is inferred by the type of arguments
	fmt.Println(max[int](a, b)) // also we can specify the type explicitly
}
```

> 点击 [这里](https://Go.dev/play/p/HLi_HJZkTPd?v=Gotip) 在线运行

然后我们再来看下面一段代码：

```Go
package main

import "fmt"

type AMap map[string]func(int, int) int

var max = AMap{
	"a": func(a, b int) int {
		if a > b {
			return a
		}
		return b
	},
}

func main() {
	int := "a"
	a := 0
	b := 1
	fmt.Println(max[int](a, b)) // so, it's clear that there is a syntax ambiguous in Go's generic impl - the callee `max[int]` can be either indexExpr or `typArgExpr`
}
```

> 点击 [这里](https://Go.dev/play/p/8S6LqkFwEF1?v=Gotip) 在线运行

我在上面代码的注释里面已经写明了，`max[int]()` 中的 `max[int]` 在语法层面是有歧义的：

- 既可以是 indexExpr，表示通过下标 `int` 访问 `max` 中的元素
- 也可以是 typArgExpr，表示显式指定 `max` 的泛型参数是 `int`

接下来我将进一步解释为什么这个歧义是需要花时间去习惯它的

## 缺陷

编程语言设计的目标之一，就是要尽可能的减少歧义

来看一段关于变量声明的演化史。早年间，变量的类型需要显式地标注：

```c
int a = 1
```

在这个基础上，甚至衍生出在变量名中带上类型前缀的写法，比如：

```c
int iAge = 1
```

这种写法的诞生有几个背景原因：

- 在阅读代码时，变量的类型是一个重要的信息
- 早期静态分析工具受限于个人电脑的速率，大家都直接使用文本编辑器一把梭，那直接通过变量名知道类型就是一个比较绿色快捷的方式了

随着编译技术的逐渐成熟，以及个人电脑运行速率的提升，下面的这些写法逐渐被大家接受：

```cpp
// cpp
auto a = 1
```

```rust
// rust
let a = 1
```

上面就是常说的类型推导 - 基于赋值表达式中右值的类型，推导出变量的类型。后续在阅读代码时，借助静态分析工具来辅助阅读：

![](https://www.jetbrains.com/rust/img/screenshots/syntax_highlighting@2x.jpg)

> 上面中 version 的类型就是有静态分析工具增强后的效果

上面提到的这段演化史，之所以成立，是因为尽管一些信息在代码中被省略了，但是「变量 a 它依然是变量」这个固有属性是不变的

我们知道有的编程语言中、表示函数调用是不需要括号的，比如对于下面的代码：

```
a
```

如果它既可以表示函数调用 a（如果静态分析得出 a 是函数的话）；也可以表示简单的访问变量 a（尽管可能没什么意义）。你会不会感觉很奇怪

回到上面 Golang 中的 `max[int]()`，确实静态分析工具（或者编译阶段）可以确切的知道 `max` 是泛型函数还是 `map`，但是两种语义之间的差异实在太迥异了，以至于我每次看到这样的代码，都忍不住把鼠标移动上去，看看 IDE 给出的提示信息。当然，前提还得是用 IDE 打开这段代码

## 解决方案一

谈到解决方案，首先要了解一下为什么 Go 中使用 `F[x]` 的形式，而不是 Java，Cpp 之流已经用了很多年的 `F<x>`

原因非常简单，就是 Go 需要保持它的一大核心特点 - 编译特别特别特别快。而 `<` 引入的歧义，会导致包含 `<` 的表达式都至少要解析两遍：

- 先按泛型解析一遍，尝试匹配关闭的 `>`
- 如果找不到关闭的 `>` 再将 `<` 作为比较运算符来解析一遍

> 因为 `<` 既可以表示泛型参数的开头，也可以表示比较运算符 - 小于号

不理解也不要紧，总是就是比较慢，与现有的需要保持的核心特点相悖

知道了原因之后，我尝试按下面几个原则来设计新的泛型语法：

- 首先就是需要消除 `>` 的歧义
- 尽可能的复用之前的泛型语法
- 复用的同时，要让新语法引入的内容、尽可能产生较少的噪音

基于上面这些原则，我将泛型语法设计成：

```Go
func max:<T>(a, b T) T {}

c := max:<int>(a, b)
```

可以看到，通过在第一个 `<` 之前引入了 `:`，即可满足上面几点需求

具体有两点优势需要再明确一下：

- `:` 有一个比较通用的语义，可以复用在上述语法中，即 `:` 右侧的内容为其左侧的内容的补充项。所以咋一看 `:<T>` 好像有点奇怪，但是将其看为对 `max` 的补充就会好很多
- `:` 本身字符宽度很小，引入的噪音很少，对 eye-parsing 的影响小

当然了 `:` 也是有缺点的，引入了噪音就是其固有缺陷，因为这毕竟是为了方便机器解析而添加的额外设计

## 解决方案二

方案一毕竟是我拍脑袋想出来的，没有经过系统的验证。作为补充，方案二取自一个比较成熟的小众语言 [nim](https://nim-lang.org/) 的设计

有趣且值得注意的是，nim 中的泛型 和 Go 同样使用了 `F[x]` 的形式，那他们之间的对比就更加明显

来看一下 nim 的语法设计是如何处理前文提到的歧义的：

```nim
proc foo[T](i: T) =
  discard

var i: int

# i.foo[int]() # Error: expression 'foo(i)' has no type (or is ambiguous)

i.foo[:int]() # Success
```

> 上述代码取自 [nim-tutorial](https://nim-lang.org/docs/tut2.html#generics)

注意 `foo[:int]` 的部分，真是巧妙的设计（与方案一中提到的几个设计原则不谋而合 :D）

同样是 Go 的 `F[x]` 形式，nim 的处理显得更加地深思熟虑 - 采用了 `:` 在消除歧义的同时减少噪音

甚至可以在其仓库中找到具体的 [[RFC] guidelines for when to use typedesc vs generics](https://github.com/nim-lang/RFCs/issues/40#generics%20cons)，RFC 中也写明了有考虑到歧义：

> call syntax foo\[T](x) ambiguous (generic or array subscript depending on foo) , cf New unambiguous generics syntax (generic arguments syntax) Nim#3502

Go 的泛型在 nim 之后，没有理由 Go 不知道这样的设计，我考虑了 Go 没有采用 nim 这样的设计的几种情况：

- 新语法影响解析速度？很明显不会，这个语法对解析速度的影响微乎其微
- 这样的歧义不影响阅读？很明显不是，歧义的两头语义差别迥异
- 这样的歧义是小概率情况？很明显不是，歧义的两头都是很常见的用法
- 为消除歧义而引入的新语法让整体语法显得不「简洁」或者「统一」？或许有可能（这里需要脑补下 Go 设计哲学中对「简洁」的定义 - sometimes 简陋，不一定是贬义）
- 从代码消费方来说，只关注函数的出入参，不必关心（阅读）那些写在函数内部的有歧义的语句；而代码维护者大都会使用包含静态分析工具的集成开发环境，大不了鼠标移动上去的事情？或许有可能

## Take away

这篇看上去像是关于语法设计的漫谈，若要是非得总结点什么的话，那就是除了思考的过程之外，没有其他绝对的事情
