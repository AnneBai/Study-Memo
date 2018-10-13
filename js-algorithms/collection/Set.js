function Set() {
  var me = this;
  var items = {};
  this.has = function(value) {
    // return value in items;
    return items.hasOwnProperty(value);
  };
  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;  // value 可以是任意基本类型值,会转换为字符串保存；
      return true;
    }
    return false;
  };
  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value]; // delete操作符，后跟对象的属性
      return true;
    }
    return false;
  };
  this.clear = function() {
    items = {};
  };
  this.size = function() {
    return Object.keys(items).length;
  };
  this.values = function() {
    return Object.keys(items);
  };
  this.print = function(text) {
    console.log(text,me.values())
  };
  this.adds = function(...args) {  // 一次添加多个元素,没有返回值；
    var len = args.length;
    for (let i = 0; i < len; i++) {
      var arg = args[i];
      if (!this.has(arg)) {       // 已有的元素不再操作
        this.add(arg);
      }
    }
  }
  // 以下是关于集合之间的操作；
  this.union = function(otherSet) {  // 并集
    var unionSet = new Set();
    // set-1元素
    var values = this.values();
    unionSet.adds(...values);
    // set-2元素
    values = otherSet.values();
    unionSet.adds(...values);

    return unionSet;

  };
  this.intersection = function(otherSet) {  // 交集
    var intersectionSet = new Set();
    for (var value of Object.values(items)) {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    }
    return intersectionSet;
  };
  this.difference = function(otherSet) {  // 差集
    var differenceSet = new Set();
    for (var value of Object.values(items)) {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    }
    return differenceSet;
  };
  this.isSubset = function(otherSet) {  // 判断是否是子集
    var isSubsetFlag = true;
    for (var value of Object.values(items)) {
      if (!otherSet.has(value)) {
        isSubsetFlag = false;
        break;
      }
    }
    return isSubsetFlag;
  }
}

var a = "test";
var b = "test";
var set = new Set();
console.log("Set类测试");
set.add({a:"a"});
set.print("add({a:'a'})");
set.clear();set.print("set.clear()")
set.add(1);
set.print("add(1)");
set.add("2");
set.print("add('2')");
set.add(false);
set.print("add(false)");
set.add(undefined);
set.remove(2);
set.print("set.remove(2)")
set.print("add(undefined)");
set.add(null);
set.print("add(null)");
set.add(null);
console.log("set.size()",set.size())
set.clear()
set.print("set.clear()")
set.print("add(null)");
set.add(NaN);
set.print("add(NaN)");
set.add(NaN);
set.print("add(NaN)");
set.add(a);
set.print("add(a),(a='test')");
set.add(b);
set.print("add(b),(b='test')");
set.add(b.slice(1,3));
set.print("add(b.slice(1,3)),(b='test')");


console.log("集合方法测试")
var setA = new Set();
var setB = new Set();
setA.add(1);
setA.add(11);
setA.adds(12,13,"b",b);
setA.print("add(1),add(11),adds(12,13,'b',b)");
setB.add(11);
setB.add(22);
setB.adds(12,23,"a",a);
setB.print("add(11),add(22),adds(12,23,'a',a)");
(setA.union(setB)).print("union");
(setA.intersection(setB)).print("intersection");
(setA.difference(setB)).print("difference");
console.log("setA.isSubset(setA.union(setB))",(setA.isSubset(setA.union(setB))));
console.log("setA.isSubset(setB)",(setA.isSubset(setB)));
console.log("setA.intersection(setB).isSubset(setB)",(setA.intersection(setB).isSubset(setB)));