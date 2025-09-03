let fruits1 = [
    "사과",
    "딸기",
    "파인애플",
    "수박",
    "참외",
    "오렌지",
    "자두",
    "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same1 = [];
let diff1 = [];

for (let f of fruits1) {
    if (fruits2.includes(f)) {
        same1.push(f);
    } else {
        diff1.push(f);
    }
}

let same2 = fruits1.filter((f) => fruits2.includes(f));
let diff2 = fruits1.filter((f) => !fruits2.includes(f));

console.log("동일 요소 배열 :", same1);
console.log("다른 요소 배열 :", diff2);
