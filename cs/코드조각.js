// ✅ 배열 관련
const copy = [...arr]; // 배열 깊은 복사 (1차원)
const board = Array.from({ length: N }, () => Array(M).fill(0)); // 2차원 배열 초기화
arr.reverse(); // 배열 뒤집기
const sum = arr.reduce((acc, cur) => acc + cur, 0); // 배열 합
const max = Math.max(...arr); // 최대값
const min = Math.min(...arr); // 최소값
JSON.stringify(arr1) === JSON.stringify(arr2); // 배열 비교
arr.filter(v => v === target).length; // 특정 값 개수 세기

// ✅ 문자열 관련
const reversed = str.split('').reverse().join(''); // 문자열 뒤집기
const code = str.charCodeAt(0); // 문자 → ASCII 코드
String.fromCharCode(97); // ASCII 코드 → 문자
const freq = Array(26).fill(0);
for (const c of str) freq[c.charCodeAt() - 97]++; // 알파벳 빈도 수
str.toUpperCase(); // 대문자
str.toLowerCase(); // 소문자
str.slice(start, end); // 문자열 자르기
str.substr(pos, len); // 문자열 자르기 (위치, 길이 기준)

// ✅ Set / Map 관련
const unique = [...new Set(arr)]; // 중복 제거
const intersect = arr1.filter(x => new Set(arr2).has(x)); // 교집합
const map = new Map();
arr.forEach(v => map.set(v, (map.get(v) || 0) + 1)); // Map 값 세기

// ✅ 정렬 관련
arr.sort((a, b) => a - b); // 숫자 오름차순 정렬
arr.sort(); // 문자열 사전순 정렬
arr.sort((a, b) => a.key - b.key); // 객체 배열 정렬
arr.sort((a, b) => { // 다중 조건 정렬
  if (a.score === b.score) return a.name.localeCompare(b.name);
  return b.score - a.score;
});

// ✅ 탐색 관련
const dx = [0, 0, 1, -1]; // 상하좌우
const dy = [1, -1, 0, 0];
const dx8 = [-1, -1, -1, 0, 1, 1, 1, 0]; // 8방향
const dy8 = [-1, 0, 1, 1, 1, 0, -1, -1];
const queue = [];
queue.push([x, y]);
while (queue.length) {
  const [cx, cy] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const nx = cx + dx[i];
    const ny = cy + dy[i];
    // 조건 검사 후 queue.push([nx, ny]);
  }
}

// ✅ 기타 유틸
const nums = str.split('').map(Number); // 숫자 문자열 → 숫자 배열
const padded = String(n).padStart(2, '0'); // 자리수 채우기
console.time('label');
// 실행 코드
console.timeEnd('label'); // 시간 측정
Array(n).fill().forEach((_, i) => { /* 반복 */ }); // 특정 횟수 반복

// ✅ 알고리즘 템플릿
let i = 0, j = 0;
while (i < A.length && j < B.length) {
  if (A[i] < B[j]) result.push(A[i++]);
  else result.push(B[j++]);
}
result.push(...A.slice(i), ...B.slice(j)); // 투 포인터 정렬 병합

const dp = Array.from({ length: N }, () => Array(M).fill(-1)); // DP 테이블 초기화
let minVal = Infinity;
let maxVal = -Infinity; // 최소/최대 초기화

console.log(JSON.stringify(obj, null, 2)); // 구조 보기 (디버깅용)