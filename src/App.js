import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const increaseCounter = () => {
        setCounter((curr) => curr + 1);
    }
    const onChange = (event) => {
        setKeyword(event.target.value);
    }
    const iRunOnlyOnce = () => (console.log("i run only once"));
    const searchUpdate = () => (console.log("i searched"));
    console.log("i run all the time");
    useEffect(iRunOnlyOnce, []);
    useEffect(searchUpdate, [keyword]);
    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
            <h1>{counter}</h1>
            <button onClick={increaseCounter}>Increase Counter</button>
        </div>
    );
}

export default App;