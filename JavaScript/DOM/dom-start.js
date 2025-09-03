// DOM
console.log(document.head);
console.log(document.body);

// document로 HTML의 요소 선택
// 이전 방식 (legacy)
console.log(document.getElementById("green"));
console.log(document.getElementsByClassName("default"));
console.log(document.getElementsByTagName("div"));

console.log("-------------------");

// 선호되는 방식
// querySelector
// CSS selector로 HTML 요소를 가져옴
console.log(document.querySelector(".default"));
console.log(document.querySelector("#blue"));
console.log(document.querySelector("input"));
console.log(document.querySelector("[name='id']"));

console.log("-------------------");

// querySelectorAll
// 선택자에 해당하는 모든 요소 선택
// 불러온 요소들에 대한 순회가 가능(forEach)
console.log(document.querySelectorAll(".default"));
console.log(document.querySelectorAll(".others"));
console.log(document.querySelectorAll("div"));

console.log("-------------------");

// 요소를 순회
// forEach
document
    .querySelectorAll("div")
    .forEach((el) => console.log("순회한 요소 :", el));

// for of
let defaultElements = document.querySelectorAll(".default");
for (let element of defaultElements) {
    console.log("for of :", element);
}
