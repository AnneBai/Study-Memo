// 图的遍历 -- 深度优先和广度优先

/**
 * N * N数组, 排列成方阵, 左上角为起点, 右下角为终点, 每次移动只能沿上下左右其中一个方向移动一步;
 * 除起点和终点外其他点有的可能不能通过, 其中可以通过的点表示为".",不可以通过的点表示为"W"(Walls).
 * 给定数组后确定是否能够从起点到达终点?
 * 可以就返回true, 否则返回false;
 */

function getArray(str) {
    return str.split("\n").map(x => x.trim().split(""));
}

function shouldPass(str) {
    const array = getArray(str);
    const exit = array.length - 1;
    const visited = array.map(row => row.map(x => false)); // 保存是否访问过
    visitPoint(array, visited);
    return visited[exit][exit];
}

function visitPoint(arr, result) {
    const len = arr.length;
    const passer = (row, col) => {
        if (result[len - 1][len - 1]) return; // 已确定可以到达， 后续不需再计算
        if (row < 0 || col < 0 || row >= len || col >= len || result[row][col] || arr[row][col] === "W") return;
        result[row][col] = true;
        passer(row, col + 1);
        passer(row + 1, col);
        passer(row - 1, col);
        passer(row, col - 1);
        console.count("parser without optimized");
    };
    return passer(0, 0);
}

shouldPass(`.....
.....
...W.
..W..
...W.`)
/**
 * 判断是否已到达终点，到达后其他点不需再计算；
 * 以上 9步 vs 22步， 减少了11步计算。
 */



/**
 * 最短路径?
 * 思路: 
 * 0. 用一个二维数组保存各位置对应的点, 用栈保存每走一步所能到达的所有点.
 * 1. 从起点开始, 找出走一步所能到达的所有点, 先验证该点是否是终点, 是则返回, 否则标记已访问, step + 1, 结果推入栈;
 * 2. 然后对栈中每个点继续分别执行第一步;
 * 3. 只要有一次到达终点, 返回step数值. 
 * 4. 如果没有路径到达，返回 -1
 */

function checkPoint(len, arr, visited) {
    return (stackArr) => {
        // 每次走一步, 并把当前能走到的点放到栈中
        const stack = [];
        const checkEnd = ([row, col]) => {
            if (row === len - 1 && col === len - 1) {
                return true;
            }
            [[row + 1, col], [row, col + 1], [row - 1, col], [row, col - 1]].forEach(([r, c]) => {
                if (r >= 0 && c >= 0 && r < len && c < len && arr[r][c] !== "W" && !visited[r][c]) {
                    visited[r][c] = true;
                    stack.push([r, c]);
                }
            });
            return false;
        };
        return stackArr.some(checkEnd) || stack;
    }
}

function shortestPath(str) {
    const array = getArray(str);
    const visited = array.map(row => row.map(item => false));
    const len = array.length;
    const checker = checkPoint(len, array, visited);
    let steps = 0;
    const pacer = (stack) => {
        const result = checker(stack);
        if (Array.isArray(result)) {
            steps++;
            return pacer(result);
        }
        return steps;
    };
    return pacer([[0, 0]]);
}

/**
 * 测试
 */

// 8步
shortestPath(`.....
.....
.....
.....
.....`)

// 12步
shortestPath(`....W
WWW.W
W...W
..WWW
.....`)