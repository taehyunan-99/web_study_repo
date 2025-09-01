// JS 변수
// 1. var
// Modern JS에서는 var를 사용하지 않음(중복 선언의 문제)
// 프로그램 일관성 깨질 위험이 있음
// 디버깅이 어려움
// 선언 되지 않아도 호출이 가능

// 변수의 선언
var a;
console.log(a);

// 초기화, 값의 할당
a = 10;
console.log(a);

// 값의 재할당
a = 100;
console.log(a);

// 변수의 중복 선언
var a = 1000;
console.log(a);

// 2. let
// 변수 값의 재할당이 가능

// 변수의 선언
let b;
console.log(b);

// 초기화
b = 3.14;
console.log(b);

// 재할당
b = "재할당";
console.log(b);

// 변수의 중복선언 불가
// let b = 100;

// 3. const (constant(상수)의 약자) (권장)
// 변수의 재할당이 불가능 (프로그램의 일관성을 높여줌)

// 변수의 선언만 하는 것 불가
// const c;

// 변수의 선언과 초기화를 함께
const c = 1000;
console.log(c);

// 재할당 불가
// c = 10000;
// console.log(c);

// 변수 이름 규칙
// 변수명 스타일 - camelCase
// 관례적인 것일 뿐 의무는 아님
let myVar;

// 숫자 시작 불가능
// let 1

// 키워드 사용 불가능
// let let
// let if

// 변수에 공백 불가능
// let my var;

// 특수문자 : _ $ 사용 가능
let $myVar;
let my_var;
