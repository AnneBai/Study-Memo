function Dictionary() {
  var items = {};
  this.length = 0;
  this.set = function(key, value) {
    // 添加键值对
    if (!(key in items)) {
      this.length++;
    }
    items[key] = value;
  };
  this.remove = function(key) {
    // 移除键值对
    if (key in items) {
      delete items[key];
      this.length--;
      return true;
    }
    return false;
  };
  this.has = function(key) {
    // 是否有某个键
    return (key in items);
  };
  this.get = function(key) {
    // 获取键对应的值
    return items[key];
  };
  this.clear = function() {
    // 清空字典
    items = {};
    this.length = 0;
  };
  this.size = function() {
    // 键值对的数量
    return this.length;
  };
  this.keys = function() {
    // 返回字典中所有的键
    return Object.keys(items);
  };
  this.values = function() {
    // 返回字典中所有的值
    return Object.values(items);
  };
  this.getItems = function() {
    return items;
  };
  this.consoleItems = function(text) {
    console.log(text,items);
  }
} 

console.log("字典测试")
var dict = new Dictionary();
dict.consoleItems("new instance");
dict.set("name","Anne");
dict.consoleItems('set("name","Anne")');
dict.set("age","27");
dict.consoleItems('set("age","27")');
console.log("size()",dict.size());
dict.set("school","xjtu");
dict.consoleItems('set("school","xjtu")');
console.log('has("school")',dict.has("school","xjtu"));
dict.set("email","bhh6551@163.com");
dict.consoleItems('set("email","bhh6551@163.com")');
dict.remove("school","xjtu");
dict.consoleItems('remove("school","xjtu")');
console.log('has("school")',dict.has("school","xjtu"));
console.log("size()",dict.size())
