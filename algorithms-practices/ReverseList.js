/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 */


function ReverseList(pHead) {
    if (pHead == null || pHead.next == null) return pHead;
    function reverse(prev, node) {
        const next = node.next;
        node.next = prev;
        return next == null ? node : reverse(node, next);
    }
    return reverse(null, pHead);
}