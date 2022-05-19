import React, { useState, useContext, useEffect } from 'react'
import { DivTitle, Line, DivEndereco, DivEnderecoPessoa, DivEntrega, DivNomeRest } from './styled'
import { DivRestaurante, DivTempo, DivEndRest, DivFrete, DivSubtotal, DivSubValor } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import CardsRestaurant from '../../components/CardRestaurant'
import GlobalStateContext from '../../context/GlobalStateContext'
import { placeOrder } from "../../services/orders"
import { useParams, useNavigate } from 'react-router-dom'

export default function CartPage(props) {
  
  const {states, setters, requests} = useContext(GlobalStateContext)
  const {cart, restaurantDetail} = states;
  const {setCart, setRestaurantDetail} = setters;


  // const frete = cart.reduce((acumulador, restaurantDetail) => acumulador+restaurantDetail.shipping*, 0)
  const frete = restaurantDetail.shipping
  // const subtotal = () => {

  // }
const subtotal = cart.reduce((acumulador, cart) => acumulador+cart.item.price*cart.item.quantity, 0)


//  const removeProduto = (produtos) => {
//     if (quantidade <= 1) {
//       const novaListaCarrinho = carrinho.filter((produto) => {
//         return produto.id !== produtos.id
//       })
//       setCarrinho(novaListaCarrinho)
//     } else {
//       const novaListaCarrinho = carrinho.map((produto) => {
//         if (produto.id === produtos.id) {
//           return { ...produto, setQuantidade(quantidade - 1)}
//         }
//         return produto
//       })
//       setCarrinho(novaListaCarrinho)
//     }

  // }

  
  const confirmOrder = () => {
    // if (){}
    //   // cart.paymentMethod
  }

   const listaCarrinho = cart.map((cart) => {
    return (
      <CardsRestaurant
        key={cart.item.id}
        name = {cart.item.name}
        description= {cart.item.description}
        price= {cart.item.price}   
        logoUrl = {cart.item.photo}    
      />
    )
  })

  return (
    <div>
      <DivTitle>
        Meu Carrinho
      </DivTitle>

      <DivEntrega>
        <DivEndereco>Endereço de Entrega</DivEndereco>
        <DivEnderecoPessoa>PUXAR DO GLOBAL O ENDEREÇO </DivEnderecoPessoa>
      </DivEntrega>

      <DivRestaurante>
        <DivNomeRest>PUXAR DO GLOVAL O NOME DO REST</DivNomeRest>
        <DivEndRest>PUXAR ENF REST</DivEndRest>
        <DivTempo>PUXAR TEMpO</DivTempo>
      </DivRestaurante>

      {listaCarrinho}

      <DivFrete>Frete: R$ {frete}</DivFrete>

      <DivSubtotal>
        SUBTOTAL
        <DivSubValor> R$ {subtotal}</DivSubValor>
      </DivSubtotal>

      Forma de Pagamento
      <Line />
      <form action="/action_page.php">
        <input type="radio" id="din" name="pagamento" value="din" />
        <label for="din">Dinheiro</label><br></br>
        <input type="radio" id="css" name="oagamento" value="cartao" />
        <label for="cartao">Cartão de Crédito</label>
      </form>


      <button onClick={() => confirmOrder}> Confirmar</button>







    </div>
  )
}
