/**
 * 数字添加千位分隔符
 * 1. 数字变成倒序的字符串或数组
 * 2. 使用正则/reduce/循环
 */

//? 正则只能向后匹配?
// 把字符串倒序
function reverseStr(str) {
    return str.split("").reverse().join("");
}

// 正则 + replace
function separator(num) {
    const revStr = reverseStr(String(num));
    return reverseStr(revStr.replace(/\d{3}(?=\d)/g, m => m + ","));
}

// 正则 + match
function separator1(num) {
    const revStr = reverseStr(String(num));
    return reverseStr(revStr.match(/\d{3}|\d+$/g).join(","));
}

// 正则 + macth 不需逆序
function separator5(num) {
    const str = `${num}`;
    const pick = str.length % 3;
    return str.slice(0, pick) + str.slice(pick).match(/\d{3}/g).join(",")
}


// reduce 转换为逆序数组
function separator2(num) {
    const arr = String(num).split("").reverse();
    const len = arr.length;
    return arr.reduce((tail, cur, i) => (i + 1) === len || (i + 1) % 3 !== 0 ? `${cur + tail}` : `,${cur + tail}`, "");
}

// reduceRight  不需逆序
function separator3(num) {
    const arr = String(num).split("");
    const len = arr.length;
    return arr.reduceRight((tail, cur, i) => i === 0 || (len -  i) % 3 !== 0 ? `${cur + tail}` : `,${cur + tail}`, "");
}

// reduceRight 不需逆序也不需转换为数组
function separator4(num) {
    const str = `${num}`;
    const len = str.length;
    return [].reduceRight.call(str, (tail, cur, i) => i === 0 || (len - i) % 3 !== 0 ? cur + tail : "," + cur + tail);
}

