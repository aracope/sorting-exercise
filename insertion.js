function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;

    // shift elements in the sorted portion to the right
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }

    // insert currentVal in its correct spot
    arr[j + 1] = currentVal;
  }
  return arr;
}

module.exports = insertionSort;
