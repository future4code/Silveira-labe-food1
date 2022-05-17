import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Selecione a quantidade:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <select>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">10</option>
                </select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-primary'>Adicionar ao carrinho</Button>
            </Modal.Footer>
        </Modal>
    )
}
