import React, { useState, useContext } from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CenteredModal from "../../src/components/CenteredModal"
import styled from "styled-components"
import { removeProduct } from "../context/GlobalState"
import GlobalStateContext from "../context/GlobalStateContext";
import { ButtonAdd, ButtonRem, IMG, CardProdutos, DivBody, DivQuant } from "./CardProductsStyled";
import { DivTitle, DivDesc, DivPrice } from "./CardProductsStyled";


const CardCart = (props) => {

    const {requests } = useContext(GlobalStateContext);
    const { removeProductCart } = requests;


    return (
        <CardProdutos key={props.product.id}>

            <IMG src={props.product.photoUrl} alt={props.product.photoUrl} />

            <DivBody>
                <DivTitle><p>{props.product.name}</p></DivTitle>
                <DivDesc><span>{props.product.description}</span>  </DivDesc>
                <DivPrice><p><strong> </strong>R$ {props.product.price}</p> </DivPrice>
            </DivBody>

            <p>{props.product.quantity}</p>


            <ButtonRem onClick={() => removeProductCart(props.product)}>Remover</ButtonRem>


        </CardProdutos>
    )
}

export default CardCart;