function LinkedList() {
    var me = this;
    var Node = function(element) {
        this['element'] = element;
        this.next = null;
    }
    var length = 0;
    var head = null;
    this.append = function(element) {
        if (element == null) {
            return alert("不能添加null或undefined")
        }
        var listNode = new Node(element);
        if (head === null) {
            head = listNode;
            length += 1;
        } else {
            var current = head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = listNode;
            length++;
        }
    };
    this.insert = function(position, element) {
        if (position > -1 && position < length) {
            var listNode = new Node(element);
            var current = head;
            var i = 0;
            while (i++ < position - 1) {
                current = current.next;
            }
            var temp = current.next;
            current.next = listNode;
            listNode.next = temp;
            // update the length of the list
            length++;
            return true;
        } else {
            return false;
        }
    };
    // 移除某个位置的元素
    this.removeAt = function(position) {
        if (position > 0 && position < length) {
            var current = head;
            var count = 0;
            while (count++ < position - 1) {
                current = current.next;
            }
            var dest = current.next;
            current.next = dest.next;
            dest.next = null;
            length--;
            return true;
        } else {
            return false;
        }
    };
    // 移除某个元素
    this.remove = function(element) {
        if (head.element === element) {
            head = head.next;
            return true;
        }
        let current = head;
        let removed = false;
        while (current.next) {
            let next = current.next;
            if (next.element === element) {
                current.next = next.next;
                next.next = null;
                removed = true;
                break;
            }
            current = next;
        }
        length--;
        return removed;
    };
    // 某个元素的索引
    this.indexOf = function(element) {
        var index = -1;
        var current = head;
        while (current) {
            index++;
            if (current.element === element) {
                break;
            }
            current = current.next;
        }
        return index;
    };
    this.isEmpty = function() {
        return length === 0;
    };
    this.size = function() {
        return length;
    };
    // 将链表转换为字符串
    this.toString = function() {
        var listElems = [];
        var current = head;
        
        while (current) {
            listElems.push(String(current.element));
            current = current.next;
        }
        return listElems.join('-->');
    };
    // 打印出链表所有元素
    this.print = function(text) {
        console.log(text,me.toString());
    };
    // 获取头元素
    this.getHead = function() {
        return head;
    };
}

function DoublyLinkedList() {
    var me = this;
    var Node = function(element) {
        this["element"] = element;
        this.prev = null;
        this.next = null;
    }
    var head = null;
    var tail = null;
    var length = 0;
    this.append = function(element) {
        if (element == null) {
            return alert("不能添加null或undefined");
        }
        var listNode = new Node(element);
        if (length === 0) {
            head = listNode;
            tail = listNode;
        } else {
            tail.next = listNode;
            listNode.prev = tail;
            tail = listNode;
        }
        length++;
        // 返回添加元素后链表的长度
        return length;
    };
    this.insert = function(position,element) {
        var listNode = new Node(element);
        if (Math.abs(position) > length) {
            return false;
        } 
        // 负数则按-1为最后一个元素位置，反方向数起
        if (position < 0) {
            position = length + position + 1;
        }
        let current;
        if (position < length / 2) {
            current = head;
            let index = 0;
            while (index++ < position) {
                current = current.next;
            }
        } else {
            current = tail;
            let index = length - 1;
            while (index-- > position) {
                current = current.prev;
            }
        }
        let p = current.prev;
        p.next = listNode;
        listNode.prev = p;
        listNode.next = current;
        current.prev = listNode;

        length++;
        return true;
    };
    this.removeAt = function(position) {
        if (Math.abs(position) > length || position === length) {
            return false;
        }
        if (position < 0) {
            position = length + 1 + position;
        }
        let current,index;
        if (position < length / 2) {
            current = head;
            index = 0;
            while (index++ < position) {
                current = current.next;
            }
        } else {
            current = tail;
            index = length - 1;
            while (index-- > position) {
                current = current.prev;
            }
        }
        let p = current.prev,
            n = current.next;
        p.next = n;
        n.prev = p;

        length--;
        // 返回被删除的元素
        return current.element;
    }
    this.remove = function(element) {
        let current = head;
        let removed = false;
        while (current) {
            if (current.element === element) {
                let p = current.prev,
                    n = current.next;
                p.next = n;
                n.prev = p;
                removed = true;
                length--;
                break;
            }
            current = current.next;
        }
        // 返回是否删除成功
        return removed;
    };
        // 某个元素的索引
        this.indexOf = function(element) {
            var index = -1;
            var current = head;
            while (current) {
                index++;
                if (current.element === element) {
                    break;
                }
                current = current.next;
            }
            return index;
        };
        this.isEmpty = function() {
            return length === 0;
        };
        this.size = function() {
            return length;
        };
        // 将链表转换为字符串
        this.toString = function() {
            var listElems = [];
            var current = head;
            
            while (current) {
                listElems.push(String(current.element));
                current = current.next;
            }
            return listElems.join('-->');
        };
        // 打印出链表所有元素
        this.print = function(text) {
            console.log(text,me.toString());
        };
        // 获取头元素
        this.getHead = function() {
            return head;
        };
        this.getTail = function() {
            return tail;
        }
}


console.log("链表方法测试")
var arr = [9,8,7];
var list = new LinkedList();
list.append(5);
list.print('append(5)');
list.append(arr);
list.print('append(arr),(arr = [9,8,7])');
list.append({name:"Anne"});
list.print('append({name:"Anne"})');
list.append(null);
list.print('append(null)'); 
list.append(undefined);
list.print('append(undefined)');
list.append("one");
list.print('append("one")');
list.append("three");
list.print('append("three")');
list.insert(1,"two");
list.print('insert(1,"two")');
console.log("size()",list.size());
list.removeAt(1);
list.print('removeAt(1)');
list.remove("one");
list.print('remove("one")');
console.log("size()",list.size());
console.log('list.indexOf("three")',list.indexOf("three"));
console.log('list.indexOf(arr)',list.indexOf(arr));
console.log('list.indexOf(5)',list.indexOf(5));

console.log("双向链表方法测试")
var arr1 = [6,5,4];
var dblist = new DoublyLinkedList();
dblist.append(8);
dblist.print('append(8)');
dblist.append(arr1);
dblist.print('append(arr1),(arr1 = [6,5,4])');
dblist.append({name:"Anne"});
dblist.print('append({name:"Anne"})');
dblist.append(null);
dblist.print('append(null)'); 
dblist.append(undefined);
dblist.print('append(undefined)');
dblist.append("一");
dblist.print('append("一")');
dblist.append("三");
dblist.print('append("三")');
dblist.insert(1,"二");
dblist.print('insert(1,"二")');
console.log("size()",dblist.size());
dblist.removeAt(1);
dblist.print('removeAt(1)');
dblist.remove("one");
dblist.print('remove("one")');
console.log("size()",list.size());
console.log('dblist.indexOf("三")',dblist.indexOf("三"));
console.log('dblist.indexOf(arr1)',dblist.indexOf(arr1));
console.log('dblist.indexOf(8)',dblist.indexOf(8));
