let result = 0;
let num = 0;

while (num <= 100) {
    if (num % 2 === 0 || num % 5 === 0) {
        result += num;
    }
    num++;
}

console.log(result);
