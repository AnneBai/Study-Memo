function BinarySearchTree() {
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null;
    this.insert = function(key) {
        var newNode = new Node(key);
        var insertNode = function(node, newNode) {
            if (newNode.key < node.key) {
                node.left === null
                    ? node.left = newNode
                    : insertNode(node.left, newNode)
            } else {
                node.right === null
                    ? node.right = newNode
                    : insertNode(node.right, newNode)
            } 
        }
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root,newNode);
        }
    };
    this.search = function(key) {
        var current = root;
        while (current) {
            if (current.key === key) {
                return true;
            } else if (current.key < key) {
                current = current.right;
            } else if (current.key > key) {
                current = current.left;
            }
        }
        return false;
    };
    // 通过中序遍历方式遍历所有节点
    this.inOrderTraverse = function(callBack) {
        if (root === null) return;
        var inOrderTreeNodes = [];
        var inOrderNext = function(node) {
            if (node === null) return;
            inOrderNext(node.left);
            if (typeof callBack === "function") {
                callBack(node.key);
            }
            inOrderTreeNodes.push(node.key);
            inOrderNext(node.right);
        }
        inOrderNext(root);
        return inOrderTreeNodes;
    };
    // 通过先序遍历方式遍历所有节点
    this.preOrderTraverse = function(callBack) {
        
        if (root === null) return;
        var preOrderTreeNodes = [];
        var preOrderNext = function(node) {
            if (node === null) return;
            if (typeof callBack === "function") {
                callBack(node.key);
            }
            preOrderTreeNodes.push(node.key);
            preOrderNext(node.left);
            preOrderNext(node.right);
        };
        preOrderNext(root);
        return preOrderTreeNodes;
    };
    // 通过后序遍历方式遍历所有节点
    this.postOrderTraverse = function(callBack) {
        if (root === null) return;
        var postOrderTreeNodes = [];
        var postOrderNext = function(node) {
            if (node === null) return;
            postOrderNext(node.left);
            postOrderNext(node.right);
            if (typeof callBack === "function") {
                callBack(node.key);
            }
            postOrderTreeNodes.push(node.key);
            
        };
        postOrderNext(root);
        return postOrderTreeNodes;
    };
    this.min = function() {
        // 树的最左端子节点最小
        if (root === null) {
            return null;
        } else {
            var current = root;
            while (current.left !== null) {
                current = current.left;
            }
            return current.key;
        }
    };
    this.max = function() {
        // 树的最右端子节点最小
        if (root === null) {
            return null;
        } else {
            var current = root;
            while (current.right !== null) {
                current = current.right;
            }
            return current.key;
        }
    };
    this.remove = function(key) {
        var findMaxChild = function (node) {
            var current = node;
            while (current) {
                if (current.right === null) {
                    return current;
                }
                current = current.right;
            }
        }
        var findMinRightChild = function (node) {
            var current = node;
            while (current) {
                if (current.left === null) {
                    return current;
                }
                current = current.left;
            }
        }
        var removeNode = function (node, key) {
            if (node === null) {
                return null;
            }
            if (key < node.key) {
                node.left = removeNode(node.left, key);
                return node;
            } else if (key > node.key) {
                node.right = removeNode(node.right, key);
                return node;
            } else {
                // 1/3, 该节点是叶节点
                if (node.left === null && node.right === null) {
                    node = null;
                    return node;
                }
                // 2/3, 该节点有一个子节点
                if (node.right === null) {
                    node = node.left;
                    return node;
                }
                if (node.left === null) {
                    node = node.right;
                    return node;
                }
                // 3/3, 该节点有两个子节点
                const successor = findMinRightChild(node.right);
                var destKey = successor.key;
                node.right = removeNode(node.right, destKey);
                node.key = destKey;
                return node;
            }
        }
        

        root = removeNode(root, key);
        
    };
    
    this.dir = function() {
        console.dir(root);
    }
}

var tree = new BinarySearchTree();
tree.insert(31);
tree.insert(17);
tree.insert(15);
tree.insert(25);
tree.insert(43);
tree.insert(89);
tree.insert(48);
console.log("insert",31,17,15,25,43,89,48)
console.log("tree.min()",tree.min());
console.log("tree.max()",tree.max());
tree.dir();
tree.remove(15);
tree.remove(43);
console.log("remove",15,43)
tree.dir();
console.log("tree.min()",tree.min());
console.log("tree.max()",tree.max());
tree.insert(10);
tree.insert(13);
tree.insert(42);
tree.insert(24);
tree.insert(28);
tree.insert(32);
tree.insert(55);
tree.insert(99);
console.log("insert",10,13,42,24,28,32,55,99);
console.log("tree.min()",tree.min());
console.log("tree.max()",tree.max());
tree.dir();
tree.remove(25);
console.log("remove",25);
tree.dir();
console.log("tree.min()",tree.min());
console.log("tree.max()",tree.max());
console.log("search(24)",tree.search(24));
console.log("search(43)",tree.search(43));
console.log("inOrderTraverse()",tree.inOrderTraverse());
console.log("preOrderTraverse()",tree.preOrderTraverse());
console.log("postOrderTraverse()",tree.postOrderTraverse());
