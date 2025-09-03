// 객체 메서드
let user = {
    name: "name1",
    age: "27",
    city: "Seoul",
};

console.log("원본", user);

// Key 추출 : 배열로 반환
console.log("키 추출", Object.keys(user));

// Value 추출 : 배열로 반환
console.log("값 추출", Object.values(user));

// [Key, Value] 추출 : 배열로 반환
console.log("키, 값 추출", Object.entries(user));

// 배열을 객체로 변환
let entries = [
    ["id", 101],
    ["name", "name2"],
];

console.log("배열에서 객체 생성", Object.fromEntries(entries));

console.log("----------------");

// 객체 순회
for (let key in user) {
    console.log("key :", key, ", Value :", user[key]);
}
