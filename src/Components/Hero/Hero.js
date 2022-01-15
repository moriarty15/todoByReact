import { Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const margin = {
    margin: "20px",
}
const textarea = {
    outline: 'none',
	border: '1px solid #999',
    paddingLeft: '10px',
    width: "100%"
}

export default function Hero() {
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);
    return (
        <>
            <Button style={margin} variant="primary" onClick={openModal}>
                Create new TODO
            </Button>

            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create TODO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea placeholder="create your note"  cols="36" rows="5" style={textarea}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}