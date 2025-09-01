// JS 자료형

// 원시 자료형
// 변수에 값을 저장 (const로 값 변경 불가능)

// 1. 문자열 (string)
let text = "안녕하세요";
console.log(text);

// 문자열의 연산
let text2 = " 반갑습니다";
console.log(text + text2); // 문자열의 결합

// JS 약타입 언어
let name = "태현";
let age = 27;
console.log("안녕하세요 저는 " + name + "입니다. 나이는 " + age + "살입니다.");

// template literal
// 변수와 문자열을 함께 쓸 수 있도록 하는 문법
// python의 f-string과 유사
console.log(`안녕하세요 저는 ${name}입니다. 나이는 ${age}살입니다.`);

// 2. 숫자형 (number)
// 정수와 실수 구분을 하지 않음
let num = 100;
let num2 = 3.14;
console.log(num, num2);

// 3. 불리언/논리형 (boolean)
// 참 거짓을 표현하는 true false (소문자로 표기)
let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse);

// 4. null (빈 값)
// "값이 없음"을 명시
let greeting = null;
console.log(greeting);
greeting = "안녕";
console.log(greeting);

// 5. undefined
// 값이 정의되지 않은 상태를 표현
let x;
console.log(x);

// 객체 자료형 / 참조 자료형
// 변수에 메모리상의 주소를 저장 (const로 주소가 아닌 값 변경은 가능)

// 1. 배열 (Array)
let fruits = ["사과", "바나나", "수박", "포도", "딸기"];
console.log(fruits);

// 인덱싱
// 일반적으로는 음수 인덱싱 불가능
console.log(fruits[4]);
console.log(fruits[-1]);

// at의 경우 음수 인덱싱이 가능
console.log(fruits.at(4));
console.log(fruits.at(-1));

// 인덱싱으로 값 변경
fruits[3] = "샤인 머스킷";
console.log(fruits);

// 이중 배열
const korean = [
    ["가", "나", "다"],
    ["라", "마", "바"],
    ["사", "아", "자"],
];
console.log(korean[1][1]);

// 2. 객체 (object)
// 키-값 쌍을 값으로 가짐
let cat = {
    name: "장화",
    age: 10,
    isCute: true,
};
console.log(cat);

// 객체의 값 조회
// 1) 점 표기법
// 키가 문자열인 경우만 가능
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);

// 2) 대괄호 표기법
// 키에 변수를 사용하고자 하는 경우에는 반드시 대괄호 표기법을 사용
console.log(cat["name"]);
console.log(cat["age"]);
console.log(cat["isCute"]);

let myKey = "name";
console.log(cat[myKey]);

// 자료형 확인
console.log(typeof "문자");
console.log(typeof 100);
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof false);
console.log(typeof null); // object? -> 설계상의 실수
console.log(typeof undefined);
console.log(typeof fruits);
console.log(typeof cat);

// 형변환
// 1) 암시적 형변환
console.log("2" + 3);
console.log("" + 100);

// 2) 명시적 형변환

// 1. 문자열로 변환 String()
let str1 = 123;
let str2 = true;
let str3 = undefined;

console.log(String(str1), typeof String(str1));
console.log(String(str2), typeof String(str2));
console.log(String(str3), typeof String(str3));

// .toString() 사용
console.log(str1.toString(), typeof str1.toString());

// 2. 숫자로 변환 Number()
let n1 = "123";
let n2 = false;
let n3 = "문자열";
let n4 = 3.14;
let n5 = "3.14";

console.log(Number(n1), typeof Number(n1));
console.log(Number(n2), typeof Number(n2));
console.log(Number(n3), typeof Number(n3));
console.log(Number(n4), typeof Number(n4));

console.log(Number(undefined), typeof Number(undefined));
console.log(Number(null), typeof Number(null));

console.log(parseInt(n4, 10));
console.log(parseFloat(n5));
