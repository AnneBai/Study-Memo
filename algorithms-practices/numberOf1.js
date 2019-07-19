/**
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 */

function NumberOf1(n) {
    return Array.from(new Array(32), (_, i) => i).filter(i => n & 2 ** i).length;
}