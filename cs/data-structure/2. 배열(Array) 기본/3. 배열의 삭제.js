function deleteAt(arr, index) {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1; // 마지막 요소 제거
  return arr;
}

console.log(deleteAt([1, 2, 3, 4], 2));
// [1, 2, 4]
