
const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};


const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const pos1 = Math.floor(Math.random() * array.length);
        const pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
};


const bubble_sort = (array) => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};


const selection_sort = (array) => {
    let len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};


const quick_sort = (array, start = 0, end = array.length - 1) => {
    if (start >= end) return;

    const pivotIndex = partition(array, start, end);
    quick_sort(array, start, pivotIndex - 1);
    quick_sort(array, pivotIndex + 1, end);
};


const partition = (array, start, end) => {
    const pivotValue = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(array, pivotIndex, end);
    return pivotIndex;
};


const particionamento = (array, start, end, pivotValue) => {
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(array, pivotIndex, end);
    return pivotIndex;
};
