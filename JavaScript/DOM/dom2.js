let greeting = document.querySelector("#greeting");
console.log(greeting);

// 태그 내부 내용 변경
console.log(greeting.innerHTML);
console.log(greeting.textContent); // (태그 안쪽의 내용을 불러올 때) 선호되는 방식

// innerHTML : 태그 안쪽에 HTML을 주입
greeting.innerHTML = "안녕하세요 <b>반갑습니다<b> 행복하세요";
console.log(greeting);
// textContent : 태그 안쪽에 text를 입력
greeting.textContent = "안녕하세요 <b>반갑습니다<b> 행복하세요";
console.log(greeting);

// 속성 변경
const naver = document.querySelector("#naver");
naver.textContent = "google";
console.log(naver);

naver.setAttribute("href", "https://google.com");

// 속성값 가져오기
const grape = document.querySelector("#grape");
console.log(grape.getAttribute("src"));

// 속성값 복사
const url = grape.getAttribute("src");
const test = document.querySelector("#test");
test.setAttribute("src", url);

// CSS 지정
const list = document.querySelectorAll(".fruit");
console.log("list", list);

// 인덱스로 접근하여 스타일 지정
// list[0].style.backgroundColor = "purple";
// list[1].style.fontSize = "30px";

// 반복문 활용
for (const li of list) {
    li.style.backgroundColor = "lightskyblue";
    li.style.fontSize = "25px";
    li.style.fontWeight = "bold";
}

// classList 활용
const h1 = document.querySelector("h1");

// 클래스 추가
h1.classList.add("title");

// 클래스 여부 확인
console.log(h1.classList.contains("title"));

// 클래스 삭제
h1.classList.remove("title");

// 클래스가 있으면 제거 없으면 추가
h1.classList.toggle("title");
console.log("h1", h1);

// 요소 찾기
const fruits = document.querySelector("#fruits");

// 자식 요소 조회
console.log("자식 요소 조회", fruits.children);
console.log("자식 요소 조회", fruits.children[0]);

const apple = document.querySelector("#apple");

// 형제 요소 조회
console.log("형제 요소 조회", apple.nextElementSibling);
console.log("다음 형제 요소 조회", apple.nextElementSibling.nextElementSibling);

// 새로운 요소 생성, 추가, 삭제
const container = document.querySelector(".container");

// 새로운 요소 생성
const p = document.createElement("p");

p.textContent = "새로운 요소";
p.style.color = "purple";
p.style.fontSize = "30px";
console.log("새로운 요소", p);

// 요소를 화면에 추가
container.appendChild(p);

// 자식 요소 삭제
const firstChild = document.querySelector(".container > p");
container.removeChild(firstChild);

// 자기 자신 삭제
container.remove();
