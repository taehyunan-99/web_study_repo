// JS DOM Event

// 버튼 선택
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

// addEventListener : 이벤트를 감지해서 함수를 실행
btn1.addEventListener("click", () => alert("버튼1 클릭"));
btn2.addEventListener("mouseover", () => console.log("버튼2 마우스 오버"));
btn3.addEventListener("click", () => (btn3.style.color = "red"));
btn4.addEventListener("click", changeDivColor);

// 함수 선언식 호이스팅
function changeDivColor() {
    const divs = document.querySelectorAll(".container > div");
    for (const div of divs) {
        div.style.backgroundColor = "black";
        div.style.color = "white";
    }
}

// 이벤트 객체
// 브라우저에서 발생한 이벤트에 대한 정보를 담은 객체
const btn5 = document.querySelector("button");
const input = document.querySelector("input");

btn5.addEventListener("click", (e) => console.log("Event", e));
input.addEventListener("keydown", (e) => {
    console.log("value", e.target.value);
    if (e.code === "ArrowUp") {
        console.log("code", e.code);
    }
});

// 폼 이벤트
const testForm = document.querySelector("#test-form");
testForm.addEventListener("submit", (e) => {
    e.preventDefault(); // 새로고침 발생 방지
    console.log("submit");
});

// onclick 함수
// 함수만 사용시 type="module" 제거 필요
const h1 = document.querySelector("h1");
h1.onclick = function handleH1Click() {
    h1.style.backgroundColor = "red";
};
