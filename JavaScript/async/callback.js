// Callback
// JS = 동기적 => 코드를 위에서 아래로 순서대로 실행함
// 콜백함수 : 함수의 실행이 끝난 후 이어서 실행되는 함수

// setTimeout : 일정시간(ms)이 지난후 함수를 실행하게 해줌
// Web API : 웹에서만 실행 가능
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);
// 1
// 3
// 2

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log("비동기 콜백"), 1000);

// Callback Hell
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (id === "taehyun" && password === "1234") {
                onSuccess(id);
            } else {
                onError(new Error("존재하지 않는 계정입니다"));
            }
        }, 1000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === "taehyun") {
                onSuccess({ name: "taehyun", role: "crew" });
            } else {
                onError(new Error("권한이 없습니다."));
            }
        }, 1000);
    }
}

// UserStorage 인스턴스 생성
const userStorage = new UserStorage();

const id = prompt("ID를 입력해주세요");
const password = prompt("PW를 입력해주세요");

userStorage.loginUser(
    id,
    password,
    (id) => {
        userStorage.getRoles(
            id,
            (userWithRole) => {
                alert(
                    `Hello ${userWithRole.name}, 당신은 ${userWithRole.role}입니다.`
                );
            },
            (error) => console.log(error)
        );
    },
    (error) => console.log(error)
);