import {useEffect, useState} from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "")
            return;
        setToDos((curr) => [toDo, ...curr]);
        setToDo("");
    }
    useEffect(() => console.log(toDos), [toDos]);
    return (
        <div>
            <h1>My To Dos {toDos.length}</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Write your to do..."
                    onChange={onChange}
                    value={toDo}
                />
                <button>Add To Do</button>
            </form>
            <hr />
            {toDos.map((item, index) => <li key={index}>{item}</li>)}
        </div>
    );
}

export default App;