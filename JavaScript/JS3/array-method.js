// 배열 메서드

let arr = [10, 20, 30, 40, 50];

console.log("원본 :", arr);

// 길이
console.log("길이 :", arr.length);

// 추가
arr.push(60); // 뒤로 추가
console.log("push(60) :", arr);
arr.unshift(0); // 앞에 추가
console.log("unshift(0) :", arr);

// 삭제
arr.pop(); // 뒤 삭제, 제거한 요소 반환
console.log("pop() :", arr);
arr.shift(); // 앞에 삭제, 제거한 요소 반환
console.log("shift(0) :", arr);

// 슬라이싱
let sliced = arr.slice(1, 4); // 원본 변경 X
console.log("slice(1, 4) :", arr, sliced);

// splice : 기존 요소를 삭제 또는 교체
arr.splice(1, 0, 15); // 원본 변경 O
console.log("splice(1, 0, 15) :", arr);

arr.splice(1, 1, 100); // 삭제와 함께 추가
console.log("splice(1, 1, 100) :", arr);

// 결합
let arr2 = [100, 200];
console.log("concat :", arr.concat(arr2)); // 원본 변경 X

// 탐색
console.log("indexOf :", arr.indexOf(100));
console.log("includes :", arr.includes(200));

// 정렬 : 원본 변형
let nums = [3, 1, 5, 2, 4];

nums.sort(); // 기본 값 : 오름차순
console.log("sort(asc) :", nums);
nums.sort((a, b) => b - a); // 화살표 함수(콜백 함수) 사용으로 내림차순 정렬
console.log("sort(desc) :", nums);

let users = [
    {
        id: 3,
        name: "name3",
    },
    {
        id: 2,
        name: "name2",
    },
    {
        id: 4,
        name: "name4",
    },
    {
        id: 1,
        name: "name1",
    },
];

users.sort((a, b) => a.id - b.id);
console.log("users :", users);

// 반전
nums.reverse();
console.log("reverse", nums);

// 순회 (map, filter, reduce), 원본 변경 X
// map : 원소를 순회하며 함수를 적용
nums = nums.map((x) => x * 2);
console.log("map((x) => x * 2)", nums);

// filter : 콜백을 기준으로 원소를 필터링해서 반환
let filtered = nums.filter((x) => x > 5);
console.log("filter((x) => x > 5)", filtered);

// reduce : 앞의 원소에 대해 뒤의 원소를 연산한 결과를 누적
let sum = nums.reduce((acc, cur) => acc + cur, 10); // 초기값 설정 가능
console.log("reduce((acc, cur) => acc + cur)", sum);

console.log("-----------------");

// 배열 순회
let fruits = ["사과", "배", "딸기", "수박", "포도"];

console.log("-----------------");

// c스타일 for문
for (let i = 0; i < fruits.length; i++) {
    console.log("c스타일", fruits[i]);
}

console.log("-----------------");

// py스타일 for문
for (let fruit of fruits) {
    console.log("py스타일", fruit);
}

console.log("-----------------");

// 배열 메서드
fruits.forEach((f) => console.log("forEach", f));
