import style from "./TodoListItem.module.css";
import { Button } from "react-bootstrap";

export default function TodoListItem({e}) {
    return (
        <>
        <li className={style.item} >
        <input type='checkbox' id={e} className={style.checkbox} /> 
        <label for={e} ></label>   
            <p className={style.content} >{e}</p>
        <div  className={style.button__container}>
        <Button className={style.button} variant="warning" >delete</Button>
        <Button  className={style.button}>change</Button>
        </div>
        </li>
        </>
    )
}