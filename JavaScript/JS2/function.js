// 함수
// 특정 기능을 하는 코드들의 모음

// 1. 함수의 선언
// 1) 함수 선언식 (기본적인 함수 선언)
// parameter : 매개변수 - 함수와 값을 연결해주는 변수
// 인자 : 매개변수에 적용할 값
// 스코프 : {} 안의 영역 (코드 블럭)
// 매개변수와 return은 생략 가능
// 호이스팅 (Hoisting) 문제 발생
function myFunc(parameter) {
    // 구현할 코드
    return parameter;
}

// 함수의 호출
console.log(myFunc("안녕하세요"));
// 안녕하세요

// 2) 함수 표현식
// 주로 익명함수와 함께 활용
const greeting = function (greeting) {
    return greeting;
};

console.log(greeting("반갑습니다"));
// 반갑습니다

// 3) 화살표 함수
// lambda에 대응
// 콜백함수에 많이 활용됨
// 축약형
// 식을 한줄로 썼을 때 자동으로 return
const square = (x) => x * x;

console.log(square(10));
// 100

// 확장형
// 스코프를 사용하면 명시적으로 return 필요
const triangle = (base, height) => {
    const area = (base * height) / 2;
    return area;
};

console.log(triangle(20, 5));
// 50
