function exchange(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

// targetFn返回每个元素中要比较的目标, 不传则比较元素自身
function splitArray(array, start, end, targetFn) {
    
    const len = array.length;
    const i = start;
    const j = end;
    const flag = array[Math.floor((start + end) / 2)];

    while(j > i) {
        while (array[i] <= flag && i < end) {
            i++;
        }
        while (array[j] >= flag && j > start) {
            j--;
        }
        if (j > i) {
            exchange(array, i++, j--);
        } else {
            break;
        }
    }


    if (typeof target === "function") {
        
    }
}