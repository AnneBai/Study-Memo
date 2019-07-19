
// 包装函数, 判断参数是否是数组且长度大于0
function MaybeArray(func) {
    return function (array) {
        return array == null || !Array.isArray(array) || array.length === 0
        ? null
        : func(array);
    }
}
/**
 * 数组中除了一个数出现5次,其他数都出现了3次
 * @param Number[]
 * @return Number
 */
function findNum5TimeMain(numbers) {
    let result = 0; // 结果
    let comparator = 1; // 用于比较的数, 对应二进制位为1, 第一次从最后一位开始
    // for (let i = 0; i < 32; i++) {
    //     const total = numbers.reduce((sum, cur) => sum + cur & comparator, 0) // 按位与后求和
    //     result += ((total % 3) === 0 ? 0 : comparator);
    //     comparator = comparator << 1;
    // }
    Array.from(new Array(32), (x, i) => i).forEach((i) => {
        const total = numbers.reduce((sum, cur) => sum + cur & comparator, 0) // 按位与后求和
        result += ((total % 3) === 0 ? 0 : comparator);
        comparator = comparator << 1;
    })
    return result;
}
const findNum5Time = MaybeArray(findNum5TimeMain);
findNum5Time([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4]) // 4

/**
 * 数组中除了一个数出现奇数次,其他数都出现了偶数次, 找到这个数
 * @param Number[]
 * @return Number
 */
function findTheOneMain(numbers) {
    return numbers.reduce((sum, cur) => sum ^ cur, 0);
}
const findTheOne = MaybeArray(findTheOneMain);
findTheOne([11, 11, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 16, 16, 16, 16]) // 15