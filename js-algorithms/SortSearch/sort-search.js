// 用数组创建实例并查看操作结果
function ArrayList () {
    var array = [];
    this.insert = function (...args) {
        array.push(...args);
    };
    this.toString = function () {
        return array.join(",");
    };
    this.print = function () {
        console.log(this.toString());
    }
    var exchange = function (index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };
    // 冒泡排序
    this.bubbleSort = function () {
        var len = array.length;
        for (let i = 0; i < len; i++) {
            for (var j = 0; j < len - 1; j++) {
                if (array[j] > array[j+1]) {
                    exchange(j, j+1);
                }
            }
        }
    };
    // 冒泡排序中减去不必要的内循环（已排序到正确位置的元素不再比较）
    this.bubbleSort1 = function () {
        var len = array.length;
        for (let i = 0; i < len; i++) {
            for (var j = 0; j < len - i - 1; j++) {
                if (array[j] > array[j+1]) {
                    exchange(j, j+1);
                }
            }
        }
    };
    // 选择排序
    this.selectionSort = function () {
        var len = array.length;
        var minIndex, min;
        for (let i = 0; i < len - 1; i++) {
            minIndex = i;
            min = array[minIndex];
            for (let j = i + 1; j < len; j++) {
                if (array[j] < min) {
                    min = array[j]
                    minIndex = j;
                }
            }
            if (i !== minIndex) {
                exchange(i, minIndex);
            }
        }
    };
    // 插入排序
    this.insertionSort = function () {
        var len = array.length;
        var current;
        for (let i = 1; i < len; i++) {
            current = array[i];
            for (let j = i - 1; j >= 0; j--) {
                if (array[j] < current) {
                    array[j+1] = current;
                    break;
                }
                array[j+1] = array[j];
            }
            array[0] = current;
        }
    };
    // 归并排序
    this.mergeSort = function () {        
        var mergeArrs = function (arr1, arr2) {
            var len1 = arr1.length;
            var len2 = arr2.length;
            var result = [];
            let i = 0;
            let j = 0;
            while (i < len1 && j < len2) {
                if (arr1[i] <= arr2[j]) {
                    result.push(arr1[i++]);
                } else if (arr1[i] > arr2[j]) {
                    result.push(arr2[j++]);
                }
            }
            while (i < len1) {
                result.push(arr1[i++]);
            }
            while (j < len2) {
                result.push(arr2[j++])
            }
            return result;
        }

        var mergeReduce = function (arr) {
            var len = arr.length;
            if (len === 1) {
                return arr;
            }
            var mid = Math.floor(len / 2);
            return mergeArrs(mergeReduce(arr.slice(0, mid)), mergeReduce(arr.slice(mid, len)))
        }

        array = mergeReduce(array);
    }
    // 快速排序
    this.quickSort = function () {
        var len = array.length;
        var quickSortProcess = function (start, end) {
            if (start >= end) {
                return;
            }
            var i = start;
            var j = end;
            var flag = array[i]; // 使用第一项作为对标元素，可能会在某些情况下表现更差，如操作几乎已排序的数组。
            i += 1;
            while (i < j) {
                while (array[i] < flag && i < end) {
                    i++;
                }
                while (array[j] > flag && j > start) {
                    j--;
                }
                if (i >= j) {
                    break;
                }
                exchange(i, j);
            }
            if (array[start] > array[j]) {
                exchange(start, j);
            }
            
            quickSortProcess(start, j-1);
            quickSortProcess(i, end);
        }
        
        quickSortProcess(0, len - 1);
    };
    this.sequentialSearch = function (item) {
        var len = array.length;
        // 数组中有该项则返回该项的索引；
        for (let i = 0; i < len; i++) {
            if (array[i] === item) {
                return i;
            }
        }
        return -1; //如果没有找到就返回-1
    };
    this.binarySearch = function (item) {
        // 假定数组已排序
        var binarySearchReduce = function (start, end) {
            if (start > end) return -1;
            var mid = Math.floor((end + start) / 2);
            if (array[mid] === item) {
                return mid;
            }
            if (array[mid] < item) {
                return binarySearchReduce(mid + 1, end);
            }
            if (array[mid] > item) {
                return binarySearchReduce(start, mid - 1);
            }
        }
        
        return binarySearchReduce(0, array.length - 1);
    };
}

console.log("冒泡排序")
var array = new ArrayList();
array.insert(23,19,17,16,12);
console.log("insert(23,19,17,16,12)");
array.print();
array.bubbleSort();
console.log("bubbleSort()");
array.print();
array.bubbleSort1();
console.log("bubbleSort()");
array.print();

console.log("选择排序")
var array = new ArrayList();
array.insert(30, 22, 19, 17, 16, 15, 8);
console.log("insert(30, 22, 19, 17, 16, 15, 8)");
array.print();
array.selectionSort();
console.log("selectionSort()");
array.print();

console.log("插入排序")
var array = new ArrayList();
array.insert(30, 22, 19, 17, 16, 15, 8);
console.log("insert(30, 22, 19, 17, 16, 15, 8)");
array.print();
array.insertionSort();
console.log("insertionSort()");
array.print();

console.log("归并排序")
var array = new ArrayList();
array.insert(50, 42, 33, 30, 22, 19, 17, 16, 15, 8);
console.log("insert(50, 42, 33, 30, 22, 19, 17, 16, 15, 8)");
array.print();
array.mergeSort();
console.log("mergeSort()");
array.print();

console.log("快速排序")
var array = new ArrayList();
array.insert(50, 42, 33, 21, 30, 22, 3, 7, 19, 17, 16, 15, 8);
console.log("insert(50, 42, 33, 21, 30, 22, 3, 7, 19, 17, 16, 15, 8)");
array.print();
array.quickSort();
console.log("quickSort()");
array.print();

console.log("顺序查找/二分查找")
var array = new ArrayList();
array.insert(50, 42, 33, 21, 30, 22, 3, 7, 19, 17, 16, 15, 8);
console.log("insert(50, 42, 33, 21, 30, 22, 3, 7, 19, 17, 16, 15, 8)");
array.print();
array.quickSort();
console.log("quickSort()");
array.print();
console.log("binarySearch(22)", array.binarySearch(22));
console.log("binarySearch(33)", array.binarySearch(33));

