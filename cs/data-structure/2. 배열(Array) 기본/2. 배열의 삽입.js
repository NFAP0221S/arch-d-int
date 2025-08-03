function insertAt(arr, index, value) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value;
  return arr;
}

console.log(insertAt([1, 2, 3, 4], 2, 99));
// [1, 2, 99, 3, 4]
