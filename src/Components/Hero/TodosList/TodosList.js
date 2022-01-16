import TodoListItem from "../TodoListItem/TodoListItem"
import style from "./TodoList.module.css"
import { useSelector } from "react-redux"

export default function TodoList() {
    const todos = useSelector(state => state.todos.items)
    return (
        <ul className={style.list} >
            {todos.map(({text, id}) => {
                return <TodoListItem key={id} text={text} id={id} />
            })}
        </ul>
    )
}