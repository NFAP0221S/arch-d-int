// 노드 클래스: 연결 리스트의 각 요소를 나타냄
class Node {
  constructor(data) {
    this.data = data; // 노드가 저장할 데이터
    this.next = null; // 다음 노드를 가리키는 포인터 (초기값: null)
  }
}

// 단일 연결 리스트 클래스
class LinkedList {
  constructor() {
    this.head = null; // 리스트의 첫 번째 노드를 가리키는 포인터 (초기값: null)
  }

  // 맨 뒤에 새로운 노드 삽입하는 메서드
  append(data) {
    // 새로운 노드 생성
    const newNode = new Node(data);

    // 리스트가 비어있는 경우 (head가 null인 경우)
    if (!this.head) {
      this.head = newNode; // 새 노드를 head로 설정
      return;
    }

    // 리스트가 비어있지 않은 경우, 맨 끝까지 이동
    let current = this.head; // 현재 노드를 head부터 시작
    while (current.next) {
      // 다음 노드가 존재하는 동안 반복
      current = current.next; // 다음 노드로 이동
    }
    current.next = newNode; // 마지막 노드의 next를 새 노드로 설정
  }

  // 모든 노드의 데이터를 출력하는 메서드
  print() {
    let current = this.head; // 현재 노드를 head부터 시작
    const result = []; // 결과를 저장할 배열

    // 모든 노드를 순회하면서 데이터를 배열에 저장
    while (current) {
      // 현재 노드가 존재하는 동안 반복
      result.push(current.data); // 현재 노드의 데이터를 배열에 추가
      current = current.next; // 다음 노드로 이동
    }

    // 배열의 요소들을 " -> "로 연결하여 출력
    console.log("### 연결 리스트 출력:", result.join(" -> "));
  }
}

// 연결 리스트 생성 및 테스트
const list = new LinkedList();

// 노드들을 리스트에 추가
list.append(10);
list.append(20);
list.append(30);

// 리스트 출력
list.print(); // ### 연결 리스트 출력: 10 -> 20 -> 30
