// 반복문
// for, while

// 1. for문
// 횟수를 기준으로 한 반복
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("-------------");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("-------------");

for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log("-------------");

for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

console.log("-------------");

// 1부터 100까지 합 구하기
let sum = 0;

for (let i = 1; i < 101; i++) {
    sum += i;
}
console.log("1~100까지의 합 :", sum);
// 1~100까지의 합 : 5050

// 2중 for문
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}

console.log("-------------");

// 2. while문
// 조건을 기준으로 한 반복
let i = 1;
while (i < 5) {
    console.log(i);
    i++;
}

console.log("-------------");

// let blinker = "초록불";
// while (blinker === "초록불") {
//     console.log("계속 가요");
//     blinker = prompt("신호등 상태를 입력하세요");
// }

console.log("-------------");

// 루프 제어문
// break : 반복문 탈출
while (true) {
    console.log("계속 가요");
    blinker = prompt("신호등 상태를 입력하세요");
    if (blinker === "빨간불") {
        break;
    }
}

console.log("-------------");

// continue : 실행을 건너뜀
let sumAge = 0;
let count = 0;
while (count < 5) {
    let age = Number(prompt());
    if (age > 120 || age < 0) {
        console.log("유효하지 않은 나이 입니다");
        continue;
    }
    sumAge += age;
    count++;
}

console.log(`평균나이 : ${sumAge / count}`);
