import React, {useContext} from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStateContext from '../context/GlobalStateContext';
import { quantityNumbers } from '../constants/urls';
import "./styled-CenteredModal.css"

export default function CenteredModal(props) {
    const {states, setters, requests} = useContext(GlobalStateContext)
    const {qtd} = states;
    const {setQtd} = setters;
    const {onChangeQuantity, addToCart} = requests

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className='modal-backdrop'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Selecione a quantidade:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <select value={qtd} onChange={onChangeQuantity} >
              <option value={0}></option>
              {quantityNumbers.map((qnt) => {
                return (
                  <option key={qnt} value={qnt}>{qnt}</option>
                )
              })
              }
            </select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-primary' onClick={() => addToCart(props.product)}>Adicionar ao carrinho</Button>
            </Modal.Footer>
        </Modal>
    )
}
