// JS 연산자
// 1) 대입 연산자 2) 산술 연산자 3) 비교 연산자 4) 논리 연산자

// 1. 산술 연산자
let a = 20;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// 2. 비교 연산자
// 1) 동등 비교
// 같다 : == , ===
// 다르다 : != , !==
// == , != : 값만 비교, 자료형은 비교 X
// === , !== : 값과 자료형 모두 비교
console.log(1 == "1"); // true
console.log(1 != "1"); // false
console.log(1 === "1"); // flase
console.log(1 !== "1"); // true

// 2) 크기 비교
let c = 20;
let d = 15;

console.log(c > d); // true
console.log(c < d); // false
console.log(c >= d); // true
console.log(c <= d); // false

// 3. 논리 연산자
// && : and - 모든 조건이 참이면 참
// || : or - 조건중 하나라도 참이면 참
// ! : not - 참/거짓 반전

// 4. 복합 대입 연산자, 증감 연산자
let count = 0;

// 복합 대입 연산자
count = count + 1;
console.log(count); // 1
count += 1;
console.log(count); // 2

let num1 = 10;
let num2 = 3;

console.log((num1 += num2)); // 13
console.log((num1 -= num2)); // 7
console.log((num1 *= num2)); // 30
console.log((num1 /= num2)); // 3.3333333333333335
console.log((num1 %= num2)); // 1

// 증감 연산자 (한칸 증가/감소)

// 후치
// 우선순위 후순위
count++;
console.log(count); // 3
count--;
console.log(count); // 2

// 전치
// 우선순위 선순위
++count;
console.log(count); // 3
--count;
console.log(count); // 2

// 후치시 대입 이후에 연산처리
let y;
y = count++;
console.log(y); // 2
console.log(count); // 3
