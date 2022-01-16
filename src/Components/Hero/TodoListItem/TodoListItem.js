import style from "./TodoListItem.module.css";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTodo } from "../../../redux/todos/todos-actions"

const textarea = {
    outline: 'none',
	border: '1px solid #999',
    paddingLeft: '10px',
    width: "100%"
}

export default function TodoListItem({ text, id }) {
    const [changeTodo, setChangeTodo] = useState('')
    const [changeMenu, setChangeMenu] = useState(false);

    const closeModal = () => setChangeMenu(false);

    const handleInput = (e) => {
        setChangeTodo(e.currentTarget.value)
    }

    const dispatch = useDispatch();

    const handleChangeTodo = () => {
        console.log(changeTodo)
        setChangeMenu(false)
    }

    return (
        <>
            <li className={style.item} >
                <input type='checkbox' id={id} className={style.checkbox} />
                <label htmlFor={id} ></label>
                <p className={style.content} >{text}</p>
                <div className={style.button__container}>
                    <Button className={style.button} variant="warning" onClick={() => dispatch(deleteTodo(id))} >delete</Button>
                    <Button className={style.button} onClick={() => setChangeMenu(true)}>change</Button>
                </div>
            </li>
            {<Modal show={changeMenu} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Change TODO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea placeholder="change todo" cols="36" rows="5" style={textarea} onChange={handleInput} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleChangeTodo}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>}
        </>
    )
}