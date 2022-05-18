import React, {useState} from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CenteredModal from "../../src/components/CenteredModal"
import styled from "styled-components"

const IMG = styled.img`
width: 300px;
`
const DivProdutos = styled.div`
  word-wrap: break-word;
  width: 300px;
`

const CardProduct = ({product}) => {
    const [modalShow, setModalShow] = useState(false);

    const showModal = () => {
        setModalShow(true);
      }
    
    return(
        <DivProdutos key={product.id}>

        <IMG src={product.photoUrl} alt={product.photoUrl} />
        <p>{product.name}</p>
        <span>{product.description}</span>
        <p><strong>Preço: </strong>R$ {product.price},00</p>
        <CenteredModal
          show={modalShow}
          product={product}
          onHide={()=>setModalShow(false)}
        />
          
        <Button variant="outline-primary" onClick={showModal}>Adicionar</Button>

      </DivProdutos>)
}

export default CardProduct