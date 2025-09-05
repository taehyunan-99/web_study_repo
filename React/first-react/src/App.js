import "./App.css";
import Counter from "./components/Counter";

function Greeting({ text }) {
    return <div style={{ fontSize: "30px", marginBottom: "30px" }}>{text}</div>;
}

export default function App() {
    const todoList = [
        "점심 먹기",
        "복습하기",
        "블로깅",
        "운동",
        "게임",
        "유튜브보기",
    ];

    return (
        <div className="App">
            <h1>Props와 State</h1>

            {/* Props 예제 */}
            <Greeting text="안녕하세요" />

            {/* State 예제 */}
            <Counter />

            {/* map 예제 */}
            <h3>오늘의 할 일</h3>
            <ul
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {todoList.map((todo, idx) => (
                    <li key={idx}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
