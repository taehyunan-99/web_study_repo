for (let i = 1; i <= 10000; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log(i);
    }
}

console.log("---------------");

// let num = Number(prompt("숫자를 입력해주세요"));

// for (let i = 1; i <= num; i++) {
//     if (i % 13 === 0 && i % 2 === 1) {
//         console.log(i);
//     }
// }

// 구구단 만들기
for (let i = 2; i <= 9; i++) {
    console.log(`[ ${i} 단 ]`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
    }
}
