// let obj = { a: 1 };
// function f() {}
// console.log(%HasFastProperties(obj));

// f.prototype = obj;
// console.log(%HasFastProperties(obj));

// let obj = {};
// console.log(%HasFastProperties(obj));
// obj.a = 1;
// obj.b = 2;
// console.log(%HasFastProperties(obj));

// 对象有两个模式：fast 和 dict
// 默认从对象字面量创建时，是 fast 模式
// fast 模式访问快，内部结构类似 c 的 struct，指针偏移即可访问字段
let obj = { a: 1 };

function f() {}
f.prototype = obj; // 经过这段赋值语句，对象会被 v8 设置为 dict 模式

// v8 之所以这个转换，就是基于一个假定 - prototype 可能是会变动的
// 而对于需长变动的对象来说，dict 模式更高效（fast 模式需要重新计算字段偏移、以及涉及搞内存拷贝）；
// 这个假定和 delete 操作类似，因为执行了 delete 操作，引擎猜测这个对象后面可能还会变，因此也切换成 dict 模式

// 然而，这个假定，有可能是和实际不符的，比如从开发者的角度，是可以在小范围内确定说，
// 我对某个对象操作了 delete 之后，我对引擎保证、后面该对象我再也不动它了，所以就可以强制让 v8 不做
// fast => dict 的转换

function toFastProperties(obj) {
  /*jshint -W027*/
  function f() {}
  f.prototype = obj;
  ASSERT("%HasFastProperties", true, obj);
  return f;
  eval(obj);
}

// v8 有意为之的测试 https://github.com/v8/v8/blob/dc712da548c7fb433caed56af9a021d964952728/test/mjsunit/dictionary-prototypes.js

// 上面的代码就是 bluebird 中的那段奇技淫巧
// `eval` 的作用仅仅只让引擎不要优化，这么做很好理解，因为优化都利用或者说挖掘「静态性」，引入了 eval 后带来的动态性，导致
// 整块代码都不能应用「静态」优化

// 看似很有道理，但是上面的奇技淫巧的实际作用不置可否。因为相比方法而且，属性是最频繁访问的，而只要确保属性都写在构造函数内，
// 那么对象还是 fast 的（即便它的 __proto__）是 dict，__proto__ 虽然是 dict，但是因为只有方法在上面，所以也无伤大雅


function f1() {}
console.log(%HasFastProperties(Function.prototype));