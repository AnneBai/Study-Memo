function Stack() {
    var items = [];
    this.push = function(...arg) {
        return items.push(...arg);
    };
    this.pop = function() {
        return items.pop();
    };
    this.peek = function() {
        return items[items.length - 1];
    };
    this.isEmpty = function() {
        return items.length === 0
    };
    this.size = function() {
        return items.length;
    };
    this.clear = function() {
        items = [];
    };
    this.print = function(str) {
        console.log(str,items.toString());
    };
}
// 测试用例
console.log("栈的实例测试")
var stack = new Stack();
console.log("isEmpty:",stack.isEmpty()); // isEmpty true
stack.push(4,5,6); 
stack.print("push"); // push 4,5,6
stack.pop();
stack.print("pop"); // pop 4,5
stack.push([9,8,7]); 
stack.print("push"); // push 4,5,9,8,7
console.log('size',stack.size(),'peek',stack.peek()); // size 3 peek [9,8,7]

// 用栈实现 十进制转二或传入参数为基数进制的例子
function baseConverter(decNumber,base = 2) {
    var remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789abcdef';
    while (decNumber > 0) {
        rem = decNumber % base;
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}
console.log("十进制数值转换为其他进制数值")
console.log("233->2",baseConverter(233,2));  // 11101001
console.log("100345->2",baseConverter(100345,2)); // 11000011111111001
console.log("100345->8",baseConverter(100345,8)); // 303771
console.log("100345->16",baseConverter(100345,16)); // 187f9

