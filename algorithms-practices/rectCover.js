/**
 * 我们可以用2*1 的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 */

function rectCover(number) {
    if (number <= 1) return number;
    function calc(n, a, b) {
        if (n === 1) return b;
        return calc(n - 1, b, a + b)
    }
    return calc(number, 1, 1);
}