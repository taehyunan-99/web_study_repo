// 조건문
// if, switch

// 1. if 문
let a = 10;
if (a > 5) {
    // 구현할 코드
    console.log(`${a} 이/가 5보다 커요`);
}
// 10 이/가 5보다 커요

// 코드가 한 줄일 때 스코프를 생략 가능
if (a > 3) console.log(`${a} 이/가 3보다 커요`);
// 10 이/가 3보다 커요

// if - else
if (a > 20) {
    console.log(`${a} 이/가 20보다 커요`);
} else {
    console.log(`${a} 이/가 20보다 작거나 같아요`);
}
// 10 이/가 20보다 작거나 같아요

// if - else if - else
let score = 85;

if (score > 90) {
    console.log("A");
} else if (score > 80) {
    console.log("B");
} else if (score > 70) {
    console.log("C");
} else {
    console.log("F");
}
// B

// if문 중첩 -> 가능
let userID = "taehyun";
let userPW = "1234";
let myID = "아이디 입력";

if (userID === myID) {
    let myPW = "비밀번호 입력";
    if (userPW === myPW) {
        console.log("로그인 성공");
    } else {
        console.log("비밀번호가 틀렸습니다");
    }
} else {
    console.log("아이디가 틀렸습니다");
}

// 2. switch문
// 값에 따라 코드를 실행하는 조건문
let b = 1;

switch (b) {
    case 1:
    case 2:
    case 3:
        console.log("b가 1~3이네요");
        break;
    case 4:
        console.log("b가 4입니다");
        break;
    default:
        console.log("b가 뭔지 모르겠어요");
}
// b가 1~3이네요

// 3. 삼항연산자
// 간단한 조건문을 간결하게 표현하는데 사용
let num = 100;
num > 50
    ? console.log("num이 50보다 커요") // 참일 때 실행
    : console.log("num이 50보다 작거나 같아요"); // 거짓일 때 실행
// num이 50보다 커요
