import { useState } from "react";
import ModalList from "./Modal/Modal";
import TodoList from "./TodosList/TodosList";

export default function Hero() {
    const [todos, setTodos] = useState([]);
    const onSubmit = (todo) => {
        return setTodos([todo, ...todos]);
    }
    return (
        <>
            <ModalList onSubmit={onSubmit} />
            {todos.length > 0 && <TodoList todos={todos}/>}
        </>
    )
}