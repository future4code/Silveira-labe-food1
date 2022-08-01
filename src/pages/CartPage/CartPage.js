import React, { useState, useContext, useEffect } from "react";
import {
  DivTitle,
  Line,
  DivEndereco,
  DivEnderecoPessoa,
  DivEntrega,
  DivNomeRest,
  Form,
  DivForm,
} from "./styled";
import {
  DivRestaurante,
  DivTempo,
  DivEndRest,
  DivFrete,
  DivSubtotal,
  DivSubValor,
  DivContainerEndereco,
  formaDePagamento
} from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import GlobalStateContext from "../../context/GlobalStateContext";
import { placeOrder } from "../../services/orders";
import { useParams, useNavigate } from "react-router-dom";
import CardCart from "../../components/CardCart";
import useForm from "../../hooks/useForm";
import { Button, Typography } from "@mui/material";
import { ScreenContainer } from "../EditAdress/styled";
import styled from 'styled-components';
import Footer from './../../components/Footer';

const H4 = styled.h4`
font-size: 20px;
margin-left: 5px;
`

export default function CartPage(props) {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const { cart, restaurantDetail, address } = states;
  const { setCart, setRestaurantDetail } = setters;
  const { getAddress } = requests;
  const [payment, setPayment] = useState("");
  const { form, InputChange, clear, setForm } = useForm({
    neighbourhood: "",
    number: "",
    city: "",
    apartament: "",
    state: "",
    street: "",
  });

  const frete = restaurantDetail.shipping;

  const subtotal = cart.reduce(
    (acumulador, cart) => acumulador + cart.item.price * cart.item.quantity,
    0
  );

  const clearCart = () => {
    setCart([]);
  };

  const confirmOrder = (restaurantDetail, subtotal) => {
    let productsArray = [];
    cart &&
      cart.forEach((order) => {
        productsArray.push({
          id: order.item.id,
          quantity: order.item.quantity,
        });
      });
    const orderFinal = {
      products: productsArray,
      paymentMethod: payment,
    };
    placeOrder(restaurantDetail, orderFinal, subtotal, clearCart);
  };

  const listaCarrinho = cart.map((cart) => {
    return <CardCart product={cart.item} />;
  });

  useEffect(() => {
    getAddress(setForm);
  }, []);

  console.log(address.number);
  const restaurant = cart[0];
  const { street, number } = address;

  return (
    <div>
      <DivTitle>Meu Carrinho</DivTitle>
      <Typography>
        <DivEndereco>Endereço de Entrega  {address && (
          <DivEnderecoPessoa>
              {street}, {number}
          </DivEnderecoPessoa>
        )}</DivEndereco>
      </Typography>
      <DivRestaurante>
        {restaurant && (
          <DivContainerEndereco>
            <DivNomeRest>
              <h3>{restaurant.restaurantDetail.name}</h3>
            </DivNomeRest>
            <DivEndRest>
              <p>{restaurant.restaurantDetail.address}</p>
            </DivEndRest>
            <DivTempo>
              <p>{restaurant.restaurantDetail.deliveryTime} min</p>
            </DivTempo>
          </DivContainerEndereco>
        )}
      </DivRestaurante>
      {listaCarrinho}
      {cart.length === 0 && <DivFrete> Frete: R$ 0,00 </DivFrete>}
      <DivSubtotal>
        SUBTOTAL
        <DivSubValor> R$ {subtotal.toFixed(2)}
        </DivSubValor>
      </DivSubtotal>
     <H4>Forma de Pagamento</H4>
      <Line />
      <br></br>
       <DivForm>
         <form
          action="/action_page.php"
          onChange={(e) => setPayment(e.target.value)}
               >
          <input type="radio" id="din" name="pagamento" value="money" />
          <label for="din">Dinheiro</label>
          <br></br>
          <input type="radio" id="css" name="pagamento" value="creditcard" />
          <label for="cartao">Cartão de Crédito</label>
          </form>
       </DivForm>
      
     
      
      
      <Button
        onClick={() => confirmOrder(restaurantDetail, subtotal)}
        variant="contained"
        fullWidth
        sx={{ color: 'primary',position: 'relative', bottom: '-50px' }}
        >
        {" "}
        Confirmar
      </Button>
      <Footer/>
    </div>
  );
}
