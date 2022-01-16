import ModalList from "./Modal/Modal";
import TodoList from "./TodosList/TodosList";
import { useSelector } from "react-redux";

export default function Hero() {
    const todos = useSelector(state => state.todos.items)
    return (
        <>
            <ModalList/>
            {todos.length > 0 && <TodoList todos={todos}/>}
        </>
    )
}