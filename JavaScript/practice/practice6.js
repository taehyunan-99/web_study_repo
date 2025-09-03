let arr = [];

for (let i = 1; i <= 100; i++) {
    arr.push(i);
}

console.log("1~100까지의 배열 :", arr);

console.log("-------------------");

let sumFor = 0;
for (let i = 0; i < arr.length; i++) {
    sumFor += arr[i];
}
console.log("for문 사용 :", sumFor);

console.log("-------------------");

let sumForOf = 0;
for (let num of arr) {
    sumForOf += num;
}
console.log("for of문 사용 :", sumForOf);

console.log("-------------------");

let sumForEach = 0;
arr.forEach((n) => (sumForEach += n));
console.log("forEach문 사용 :", sumForEach);
