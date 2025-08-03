let arr = [1, 2, 3, 4];
arr.splice(2, 0, 99); // 삽입
console.log(arr); // [1, 2, 99, 3, 4]

arr.splice(2, 1); // 삭제
console.log(arr); // [1, 2, 3, 4]
