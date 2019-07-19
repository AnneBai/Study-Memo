/**
 * 输入一个链表，输出该链表中倒数第k个结点.
 */

function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindKthToTail(head, k) {
    if (head == null) return null;
    function getK(node) {
        if (node.next != null) {
            const [next, isFinded] = getK(node.next);
            if (isFinded) {
                return [next, true];
            }
            return next + 1 === k ? [node, true] : [next + 1, false];
        } else {
            return k === 1 ? [node, true] : [1, false];
        }
    }
    const [result, isFinded] = getK(head);
    return isFinded ? result : null;
}

var testHead = [1, 2, 3, 4].reduceRight((pre, cur) => {
    const node = new ListNode(cur);
    node.next = pre;
    return node;
}, new ListNode(5));

FindKthToTail(testHead, 6);