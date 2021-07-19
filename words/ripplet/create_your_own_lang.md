# 码个自己的语言

## 前言

本文将对实现一个自己的语言所需的1234做简要的介绍，为大家后续在编程语言的道路上扬帆起航提供一些参考

总是从一个角度看问题，获得的信息是有限的，本文将提供一个实现编程语言的视角，希望可以补充大家对编程语言的理解

## 图灵机与图灵完备

在一些学习资料以及一些编程语言的简介里，常常会出现「图灵机与图灵完备」的字眼

图灵机，简单来说，就是一个使用数学方式描述的，进而是抽象的机器，该机器可以用来执行算法，算法为人类日常活动涉及的内容的抽象描述

图灵机和我们的计算机之间的关系类似好比：

下面是图灵机：

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9489271139/0768/49d0/0ee1/6bb44645f2d7cbbbdcf7f1ead81af1aa.png)

下面是计算机：

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9489297411/5aa4/4010/d900/682b94a01ef9e69eeb195ced102dfbcc.png)

图灵机的厉害之处在于，是先有的图灵机，然后才有的计算机

图灵机目前目前的角色更多的是对计算概念的抽象描述，在实现编程语言的过程中几乎不会用到

## GPL 与 DSL

近年来 [DSL - Domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language) 出镜的频率比较高，与之相对的则是 [GPL - General-purpose programming language](https://en.wikipedia.org/wiki/General-purpose_programming_language)

DSL 可以简单概括成面向特性问题，因而功能有限的编程语言

上文已经介绍过图灵机和图灵完备，图灵完备就是 GPL 可以描述的算法（或者说可解决问题）的范围的数学描述（精确定义）

经常看到一些编程语言进行了 [自举 - Bootstrapping](https://en.wikipedia.org/wiki/Bootstrapping_(compilers))，这也是从工程化的角度自证了具有图灵完备的特质

DSL：

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9489382559/1bed/d244/fdcf/8b7c8ab3813f2bb2f7ab6a34ae95f083.png)

GPL：

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9489397765/a477/49b7/3f2d/10a9458471f2a40cad1757079d884f37.png)


没有最好的方案，只有最合适的方案。所以 GPL 并不一定在面对所有问题时都优于 DSL，具体要视情况而定

不过当我们计划在项目中在引入 DSL 之前，最好可以先阅读 [DSL 的误区](https://www.yinwang.org/blog-cn/2017/05/25/dsl)

## PL 专家与 Compiler engineer

下图是 PL 专家：

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9518182042/c41c/2f04/b1d5/624592a5f43cb790d7ef8af7acc83654.png)

PL 专家，更着重于设计，是开发者与机器之前的桥梁。需要努力地在三者（人、编程语言、机器）之间达到平衡

下图是 编译器工程师：

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9518194263/f9b8/7480/9780/ab66a75386c3f2089768c9676bb1f1ad.png)

编译器工程师，则更着重实现，需要深谙编程语言实现的每个环节，高效地交付 PL 专家的设计

这两个角色在实际工作中或许没有各自独立对应的岗位，但是在一门编程语言的生命周期中，一定时刻有这两个角色的参与

之所以要强调他们的区别，是希望我们在学习别人的语言或者设计自己的语言时，能够交替的在这两个角色之间切换，以他们的角度来审视我们的编程语言

## 解释器和编译器

为了让编程语言得以执行，出现了 解释器（Interpreter），编译器（Compiler）甚至 翻译器（Transpiler），与之对应的就出现了解释型语言，编译型语言，顺着这个解释 翻译器 对应的语言似乎解释不通了

纵观当前的编程语言实现，已经无法简单将一门语言归类成是解释型或是编译型了，比如 JavaScript 已经有了 JIT，C 语言会先编译成汇编（对比 Transpiler）

如果非要说某一门语言是解释型，或者编译型，则其实是想强调这类技术是该语言实现中的重点。比如，强调是解释型，则重点是该语言没有很重的编译环节，所编写的应用可以很快的启动；强调是编译型，则重点是该语言具有较高的性能；翻译型则强调的是 source-to-source

无论如何，单单说一门语言是编译型还是解释型已经词不达意了，通常需要一两条从句或者更多篇幅描述该语言的特性

## 编译器的结构

随着编程语言实现技术的发展，如今无论是编译器还是解释器，其内部结构大致已经固定了：

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9518811480/aaf7/c445/6712/5f4d69be78378268d217ebe47b325008.png)

编译器前端主要负责语法的解析，生成中间表达形式

编译后端则根据中间表达形式，做进一步优化，生成目标代码（或者直接模拟 CPU 的 [fetch–decode–execute cycle](https://en.wikipedia.org/wiki/Instruction_cycle) 形式解释执行）

## 编程语言组成部分

如今要实现一门编程语言相较之前，可以说是非常简单，所以每天都在出现新的语言，那为什么能够走进大家视野的编程语言屈指可数呢

因为实现编程语言不是一蹴而就的，是一个需要大家持之以恒，不断完善升级打磨的软件产品

原本实现编程语言的人起点很高，他们认为提供语言本身就够了，剩余的比如标准库，模块系统，包管理系统，都是不需要的，由开发者自己实现就好了，反正又不难（他们或许有这样的想法）

实际证明，不难的东西它也得花时间。因此如今的编程语言，都自带了标准库，模块系统，包管理系统，否则就很难吸引到开发者。现代的编程语言通常包含但不限于下面的部分：

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9922528833/76bc/3999/3d35/fe6a082cd4f29cd9d40a0c5839525680.png)

当然我们自己的编程语言可就管不了那么多了，先实现语言本身就好了

## 语言的定位

在设计一门语言之前，想好它的定位是很重要的。因为简单和轻量永不过时，那么我们就把目标定为「简单、轻量」吧

我们把目标稍微细化一下：

- 简单：语法简单，嵌入简单
- 轻量：执行所消耗的负载低

## 语法概览

现在我们可以通过一些小的代码片段，来对我们的语言有一个大致的感知

hello world

```go
a := "hello world"
print(a) // "hello world"
```

任何语句都有返回值

```go
a := 1
b := if a then 2 else 3
print(b) // 2
```

循环语句

```go
a := 1
b := repeat {
  a = a + 1
  a
} until a > 10

print(a) // 11
print(b) // 11
```

闭包不能缺席

```go
a := 1
f := () => {
  () => {
    a
  }
}
print(f()()) // 1
```

## 语法描述

有了概览之后，我们还需要对语法给出其形式化的描述，方便我们后续对语法进行完善以及语法解析器的编写

有很多形式可以用于描述语法，比如我们希望描述下面的语法：

```
hi "lexer"
hi "parser"
```

[EBNF](https://github.com/hsiaosiyuan0/icj/blob/master/part1/1-3-hi.md#%E6%89%A9%E5%B1%95%E5%B7%B4%E7%A7%91%E6%96%AF%E8%8C%83%E5%BC%8Febnf-extended-backusnaur-form)

```ebnf
prog = { say_hi } ;
say_hi = "hi", string ;
string = '"' , { all characters - '"' }, '"' ;
```

[W3C's EBNF](https://github.com/hsiaosiyuan0/icj/blob/master/part1/1-3-hi.md#w3cs-ebnf)

```ebnf
prog ::= say_hi*
say_hi ::= HI STRING
HI ::= "hi"
STRING ::= '"' [^"]* '"'
```

[antlrv4](https://www.antlr.org/)

```ebnf
prog: hiStmt* EOF;
hiStmt: "hi" String;
String: '"' (~["])* '"' ;
```

上述形式虽然存在一些差异，但是它们的主要内容都为：

- 每一行表示一条语法规则（Production Rule）
- 规则的形式为：`规则名: 规则内容`
- 规则右侧可以根据定义的其他规则继续展开
- 不能继续展开的部分称之为终结符（Terminal Symbol）

我们的语法将使用 antlr 提供的形式来描述

antlr 是一个 Parser Generator，相比 yacc 之类，它具有这些特点：

- 本身语法相对清晰简单
- 方便直观地处理左递归
- 支持生成各式目标代码（CPP，Java，Go，Swift, etc.）

后面我们都将基于 antlr 来讲解。手写的解析器可以帮助我们更加具体的了解编程语言的实现过程，但由于解析环节仅仅是其中的一小部分，为了能够快速的对编程语言实现有一个整体的感知，我们目前就直接使用 antlr 来生成解析器

[ANTLR 4 Documentation](https://github.com/antlr/antlr4/blob/master/doc/index.md)

### 词法和语法

为了提高编译环节的可维护性，我们通常会将语法解析的步骤进行拆分：词法分析，语法分析。当然也有一些实现会将这两步合在一起

词法分析，主要关注前文提到的终结符的解析，然后语法分析时就可以关注规则的解析

在使用 antlr 时，可以将词法和语法在同一个文件中进行描述，不过更推荐分开描述

[RippletLexer.g4](https://github.com/hsiaosiyuan0/ripplet/blob/master/grammar/RippletLexer.g4)

```ebnf
lexer grammar RippletLexer;

options {
  superClass = RippletLexerBase;
}

If: 'if';
Then: 'then';
Else: 'else';
Match: 'match';
Fn: 'fn';
Repeat: 'repeat';
Until: 'until';
Typeof: 'typeof';
Is: 'is';
Not: 'not';
IsNot: 'isnt';
```

[RippletParser.g4](https://github.com/hsiaosiyuan0/ripplet/blob/master/grammar/RippletParser.g4)

```ebnf
parser grammar RippletParser;

options {
  tokenVocab = RippletLexer;
}

program: statement* EOF;

statement:
  exprStmt
  | ifStmt
  | repeatStmt
  | breakStmt
  | matchStmt
  | assignStmt
  | varDeclareStmt
  | objDeclareStmt
  | fnDeclareStmt
  | blockStmt
  | returnStmt
  ;
```

## 左递归

在编写语法的时候，左递归是一个需要考虑的问题

```ebnf
expression:
  | expression ('*' | Divide | '%') expression          # MulExpr
  | expression ('+' | '-') expression                   # AddExpr
  | expression ('>' | '<' | '>=' | '<=')  expression    # RelationExpr
  ;
```

上面语法展示的是直接左递归，当然也有间接左递归，不过 antlr 目前为支持间接左递归的自动处理

左递归的意思是规则总是在左侧使用自身进行展开，因为没有消耗任何输入，所以直接根据左递归语法编写的解析器会陷入死循环

好在 antlr 会自动帮我处理左递归，如果是我们自己手写解析器的话，那么就不得不对左递归语法进行简单的变换，以防止解析程序进入死循环。变换的方式可以参考 [解析算术表达式 - 左递归和其消除法](https://github.com/hsiaosiyuan0/icj/blob/master/part1/1-7-arith-left-recursion.md)


## 优先级和结合性

优先级的解决的问题是，对于下面的表达式，哪一部分需要先计算：

```
1 + 2 * 3
```

引入了优先级后可以解决这个问题 - 对运算符的给定各自的优先级，优先级较高的先运算

比如 `*` 的优先级为 `15`， `+` 的优先级为 14，因为 `*` 的优先级更高，所以 `2 * 3` 的部分优先计算

结合性解决的问题是，当优先级相同时，哪一部分需要先计算：

```
2 ** 3 ** 4
```

比如 `**` 的优先级是 `16`，那么表达式是识别为 `(2 ** 3) ** 4` 还是 `2 ** (3 ** 4)`，很显然通常是后者，那么将 `**` 设定为具有「右结合性」的运算符就可以解决该问题

所以很明显，优先级和结合性也是编写语法时需要考虑的

```ebnf
expression:
  | <assoc=right> expression '**' expression            # PowerExpr
  | expression ('*' | Divide | '%') expression          # MulExpr
  | expression ('+' | '-') expression                   # AddExpr
  | expression ('>' | '<' | '>=' | '<=')  expression    # RelationExpr
  ;
```

在 antlr 中对它们的处理也非常简单：

- 按照分支出现先后的顺序，优先级由高到低
- 结合性则通过注解 `<assoc=right>` 来表示

如果后面我们有兴趣手写解析器，可以参考 [解析算术表达式 - 优先级与结合性](https://github.com/hsiaosiyuan0/icj/blob/master/part1/1-8-arith-precedence-assoc.md)

## AST

我们使用树形结构来存放解析的结果，选择树形结构是因为语法规则本身包含了层次关系

比如 `2 * 3 + 4` 有类似下面的结构

```
    node
    / | \
 node +  4
 / | \
2  *  3
```

antlr 提供了两种方式供我们使用该树形结构：`Listener` 和 `Visitor` 

两个方式都是为了遍历树上的节点

Listener 会自动帮我们做深度优先的遍历，在遇到不同的节点的时候，调用我们提供的 handler

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9919476112/17cb/eb6b/feb9/bad55ac2bc99b00515784bd0c40759ad.png)

Visitor 我们可以自己控制：

- 遍历的方式（深度优先还是广度优先，虽然通常是前者）
- 遍历的节点顺序，或者跳过某些节点

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9919487120/93f2/cd74/8c32/65b971628cb0f0450ec2ee51a27ad2c5.png)

图片引用自 [Antlr4 - Visitor vs Listener Pattern](https://saumitra.me/blog/antlr4-visitor-vs-listener-pattern/)

## 符号表

有了 AST 之后，我们第一步是先构建符号表（Symbol Table），符号表用于记录变量定义的作用域

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9921431169/91bb/b08e/cdd9/615af3fd68a4f8a70105676906463766.png)

在我们的语言中，变量使用之前，必须通过 `:=` 进行定义，并且变量的生效作用域是块级的，因此我们可以利用 Listener 模式：

- 在每次进入块级作用域额时候增加一个新的作用域，并将其链接到父级，设置当前作用域为新增作用域
- 在每次离开块级作用域的时候，将当前作用域设置成其父级作用域
- 每次进入变量声明语句的左值时，在当前作用域定义变量
- 每次进入标识符节点的时候，若不在变量声明语句的左值，则判断变量是否已经定义

## 基于栈的虚拟机

操作码是直接给虚拟机运行的，因此操作码的设计和生成离不开对虚拟机运行方式的了解

我们的语言将使用基于栈的虚拟机，与之相对的还有基于寄存器的虚拟机

对于表达式 `a := 1 + 2`

基于栈的虚拟机其运行形式：

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9920410200/30ad/0357/acf7/b82493b9191eb0e73f633910e1051cda.png)

基于寄存器的虚拟机其运行形式：

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9921446409/1e2f/b849/ef76/31dabfaf8d9b97118a984a1d9c57070f.png)

基于寄存器的虚拟机在没有应用寄存器分配算法的情况下，可以不必考虑寄存器的数量，所以可以把变量直接存放在 registers 上；如果应用了寄存器分配算法，那么也可以将部分变量存放在寄存器上，不管是哪种情况，相对基于栈的虚拟机而言，都可以减少一些指令的数量，比如上图省去的 `STORE_0` 指令

虽然理论上基于寄存器的虚拟机表现出比基于栈的虚拟机有更高的执行效率，但是实际上却不是一定的，并且基于栈的虚拟机还有实现简单和方便维护的特点，所以具体使用哪一种形式的虚拟机需要视情况而定

## 指令生成

前面我们已经通过图例展示了 `a := 1 + 2` 生成的指令：

```
CONST_0
CONST_1
ADD
STORE_0
```

我们简单看下这段指令是如何生成的

`1 + 2` 对应的是 `AddExpr`，因此我们编写 `VisitAddExpr` 方法

```go
func (v *CodegenVisitor) VisitAddExpr(ctx *parser.AddExprContext) interface{} {
  v.Visit(ctx.Expression(0))
  v.Visit(ctx.Expression(1))

  if ctx.Plus() != nil {
    v.emitOpcode(ADD)
  } else if ctx.Minus() != nil {
    v.emitOpcode(SUB)
  }
  return nil
}
```

`1` 和 `2` 对应的是 `NumberLiteral`，因此我们编写 `VisitNumberLiteral` 方法，在其中：

```go
func (v *CodegenVisitor) VisitRealLiteral(ctx *parser.RealLiteralContext) interface{} {
  i, err := strconv.ParseFloat(ctx.GetText(), 64)
  if err != nil {
	panic(err)
  }

  ci := v.chunk.AddConstNum(float64(i))
  v.emitOpcode(CONST)
  v.emitInt(ci)
 return nil
}
```

[Visit](https://github.com/hsiaosiyuan0/ripplet/blob/master/internal/asm/codegen.go#L73) 是一个路由方法，它根据节点实际的类型分配到对应的处理方法中

大部分指令的生成都是类似上面的形式，不过条件分支和循环语句的生成会略有不同，有兴趣的可以通过源码深入了解：[VisitIfStmt](https://github.com/hsiaosiyuan0/ripplet/blob/master/internal/asm/codegen.go#L271)，[VisitRepeatStmt](https://github.com/hsiaosiyuan0/ripplet/blob/master/internal/asm/codegen.go#L143)

## 闭包

为了让我们的语言具备灵活性和表现力，闭包是必不可少的

为了实现闭包，我们在引擎内部实现中引入 upvals 的概念：

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9922008012/f424/d3d9/c707/7841201cb46ed93c3fa73246a2f910d8.png)

如果是外层函数定义的变量，则使用 upval 来表示它们：

- 如果是直接父级函数定义的变量，则 upval 的类型是 `local` 表示引用的位置在 call frame 的 locals 集中
- 如果是间接引用的祖先函数定义的变量 `a`，则从当前函数开始，向上构造 upval chain，即在中间函数的 upvals 集中都增加 `upval:ref:a` 表示对外层变量的引用，当遇到祖先函数 k，k 直接引用其父级函数的定义的变量 `a` 时，构造 `upval:local:a` 表示引用的位置在 call frame 的 locals 集中

之所以间接引用需要构造 upval chain 是因为，变量首先存在 call frame 的 locals 集中，如果不构造 upval chain 则无法完成对间接外层变量的捕获（capture）

当 `f` 的赋值语句执行时，引擎内部状态为：

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9922103339/c24a/5fa0/fbab/ef42d0b6426e4421475928a75d581c95.png)


当 `f` 赋值语句执行完成后，引擎的内部状态变为：

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9922112066/7687/def4/0415/a7bd28ff39894e7b131621f7de8d6a2b.png)


当 `f` 执行时，引擎的内部状态为：

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9922216320/1035/9e14/2bbf/b89811537a2e9a827ddfce5d78edb70c.png)

当 `f` 执行后，引擎的内部状态变为：

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9922284173/9773/1fd8/50ff/6666cf426dd00c62407c768c97986547.png)

可以看到虽然 call frame 销毁了，但是 local b 由于被其他闭包捕获了，所以依然存活，并且 b 只能被那些捕获了它的闭包的函数所访问

upvals 是参考的 clua 的设计，有兴趣的可以深入了解 [Closures in Lua](https://www.cs.tufts.edu/~nr/cs257/archive/roberto-ierusalimschy/closures-draft.pdf)

## 指令执行

其中指令执行的部分，都是模拟的 [fetch–decode–execute cycle](https://en.wikipedia.org/wiki/Instruction_cycle)

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9922365984/e535/74e6/234c/eba3574471e69ea676db79ed8bfafb47.png)

对应到我们的虚拟机实现则是：

1. 根据 PC 的指向，拿到指令，PC 步进1
2. 解析执行拿到的指令，一个大的 dispatch 方法，将指令路由到对应的处理方式
3. 是否有指令，有的话回到步骤1，没有进入步骤4
4. 退出 fetch–decode–execute loop

代码实现可以参考我们的语言实现 [vm:dispatch](https://github.com/hsiaosiyuan0/ripplet/blob/master/internal/vm/vm.go#L134)

## 小结

上面我们介绍了实现自己语言需要涉及的大致环节，希望可以为大家在实现自己语言的道路上指引方向。很遗憾因为篇幅有限无法面面俱到，后面有机会可以针对其中的章节继续展开讨论

完整的项目可以参考 [ripplet](https://github.com/hsiaosiyuan0/ripplet)，可以 fork 或者 issue 交流（star 也完全不排斥 :-p）
