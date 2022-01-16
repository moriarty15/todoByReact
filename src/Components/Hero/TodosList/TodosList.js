import TodoListItem from "../TodoListItem/TodoListItem"
import style from "./TodoList.module.css"

export default function TodoList({todos}) {
    return (
        <ul className={style.list} >
            {todos.map((e,i) => {
                return <TodoListItem key={i} e={e}/>
            })}
        </ul>
    )
}