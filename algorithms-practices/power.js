/**
 * 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
 */
// 复杂度On
function Power(base, exponent) {
    return exponent ? Array.from(new Array(exponent), (x) => base).reduce((pre, cur) => pre * cur) : 1;
}
// 复杂度Ologn
function Power(base, exponent) {
    if (exponent <= 1) {
        return exponent ? base : 1;
    }
    let temp = 1;
    while (exponent > 1) {
        if (exponent % 2 === 0) {
            exponent /= 2;
        } else {
            exponent = (exponent - 1) / 2;
            temp *= base;
        }
        base *= base;
    }
    return base * temp;
}
