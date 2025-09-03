// 문자열 메서드
let str = "    Hello JavaScript World    ";

console.log(`원본 : ${str}`);

// 길이
console.log(`길이 : ${str.length}`); // 함수 X -> 속성

// 공백제거 : trim
console.log(`공백제거 : ${str.trim()}`); // 원본 변경 X
str = str.trim();

// 대문자 변환
console.log(`대문자변환 : ${str.toUpperCase()}`); // 원본 변경 X
// 소문자 변환
console.log(`소문자변환 : ${str.toLowerCase()}`); // 원본 변경 X

// 탐색
console.log(`인덱스 찾기 : ${str.indexOf("Java")}`); // 특정 문자열의 인덱스 반환
console.log(`문자열의 포함여부 : ${str.includes("Java")}`); // true false로 반환

// 슬라이싱
console.log(`슬라이싱 : ${str.slice(6, 16)}`); // 원본 변경 X, 시작 포함 끝 미포함

// 치환
console.log(`하나만 치환 : ${str.replace("World", "Universe")}`); // 원본 변경 X
console.log(`전부 치환 : ${str.replaceAll("l", "L")}`); // 원본 변경 X

// 분할
console.log(`분할 : ${str.split(" ")}`); // 원본 변경 X, 구분자 필요

// 병합
console.log(`합치기 : ${"Hello ".concat("Coding ", "World")}`);
