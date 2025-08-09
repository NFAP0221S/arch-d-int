// 배열의 삽입 문제
// 배열에서 특정 위치에 데이터를 삽입하려면, 해당 위치부터 오른쪽으로 데이터를 한 칸씩 이동시켜야 합니다.

// 문제: 주어진 배열과 삽입할 값, 인덱스를 받아
// 값을 해당 인덱스에 삽입한 새로운 배열을 반환하세요.
// 기존 배열은 변경하지 마세요.

insertAt([10, 20, 30], 1, 15) // ➞ [10, 15, 20, 30]
insertAt([1, 2, 3], 0, 0)     // ➞ [0, 1, 2, 3]

function insertAt(arr, index, value) {
  const newArr = [...arr]; // 배열 깊은 복사
  // 삽입할 위치부터 오른쪽으로 데이터를 한 칸씩 이동시켜야 합니다.
  // 1. 배열을 받음
  // 2. 배열을 순회하면서 삽입할 위치부터 오른쪽으로 데이터를 한 칸씩 이동시켜야 합니다.
  // 3. 삽입할 위치에 값을 삽입
  // 4. 새로운 배열을 반환

  // i는 배열의 길이-1(2)부터 시작해서 index(1)일때까지 감소하면서 반복
  for (let i = newArr.length - 1; i >= index; i--) {
    newArr[i + 1] = newArr[i]; // i가 2일때, newArr[3] = newArr[2]; 즉 인덱스를 한칸씩 오른쪽으로 이동시킴
  }
  newArr[index] = value;
  return newArr;
}

function deleteAt(arr, index) {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1; // 마지막 요소 제거
  return arr;
}

console.log(deleteAt([1, 2, 3, 4], 2));