let mathScore = Number(prompt("수학점수 입력"));
let engScore = Number(prompt("영어점수 입력"));

let meanScore = (mathScore + engScore) / 2;

console.log(`수학 점수 : ${mathScore}`);
console.log(`영어 점수 : ${engScore}`);
console.log(`평균 점수 : ${meanScore}`);