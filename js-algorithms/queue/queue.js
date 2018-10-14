function Queue() {
    var items = [];
    this.enqueue = function(element,...rest) {
        items.push(element,...rest);
    };
    this.dequeue = function() {
        return items.shift();
    };
    this.front = function() {
        return items[0];
    };
    this.isEmpty = function() {
        return items.length === 0;
    };
    this.size = function() {
        return items.length;
    };
    this.clear = function() {
        items = [];
    }
    this.print = function(text) {
        console.log(text || '',items.toString());
    };
}

var queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("A");
queue.print('enqueue("A")');           // A
queue.enqueue("B","C","D");       
queue.print('enqueue("B","C","D")');           // A,B,C,D
console.log("size",queue.size()); // 4
queue.dequeue();                   
queue.print("dequeue()")            // B,C,D
queue.dequeue();
queue.print("dequeue()");           // C,D

// 优先队列
console.log('优先队列')

function PriorityQueue() {
    var items = [];
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.isEmpty = function() {
        return items.length === 0;
    }
    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element,priority);
        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            var added = false;
            var len = items.length;
            for (var i = 0; i < len; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i,0,queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElement);
            }
        }
    };
    this.dequeue = function() {
        return items.shift();
    };
    this.size = function() {
        return items.length;
    };
    this.clear = function() {
        items = [];
    }
    this.print = function(text) {
        var queueStr = '', i = 0, len = items.length;
        for (i; i < len; i++) {
            queueStr += items[i].element.toString();
        }
        console.log(text || '', queueStr);
    }
}       

var priorityQueue = new PriorityQueue();
console.log(priorityQueue)
priorityQueue.enqueue("C",3);
priorityQueue.print('enqueue("C",3)')
priorityQueue.enqueue("A",1);
priorityQueue.print('enqueue("A",1)')
priorityQueue.enqueue("B",2);
priorityQueue.print('enqueue("B",2)')
console.log("size",priorityQueue.size())
priorityQueue.dequeue();
priorityQueue.print("dequeue()")

