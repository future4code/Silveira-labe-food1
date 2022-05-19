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

  const { states, setters, requests } = useContext(GlobalStateContext)
  const { cart, restaurantDetail } = states;
  const { setCart, setRestaurantDetail } = setters;
  const [payment, setPayment] = useState('');


  const frete = restaurantDetail.shipping
 
  const subtotal = cart.reduce((acumulador, cart) => 
  acumulador + cart.item.price * cart.item.quantity, 0) 




  const clearCart = () => {
    setCart([])
  }

  const confirmOrder = (restaurantDetail, subtotal) => {
    let productsArray = [];
    cart && cart.forEach((order) => {
      productsArray.push({ id: order.item.id, quantity: order.item.quantity })
    })
    const orderFinal = ({
      products: productsArray,
      paymentMethod: payment
    })
    placeOrder(restaurantDetail, orderFinal, subtotal, clearCart)
  }

  const listaCarrinho = cart.map((cart) => {
    return (
      <CardsRestaurant
        key={cart.item.id}
        name={cart.item.name}
        description={cart.item.description}
        price={cart.item.price}
        logoUrl={cart.item.photo}
      />
    )
  }
  )


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
        <DivSubValor> R$ {subtotal.toFixed(2)}</DivSubValor>
      </DivSubtotal>

      Forma de Pagamento
      <Line />
      <form action="/action_page.php" onChange={(e) => setPayment(e.target.value)}>
        <input type="radio" id="din" name="pagamento" value="money" />
        <label for="din">Dinheiro</label><br></br>
        <input type="radio" id="css" name="pagamento" value="creditcard" />
        <label for="cartao">Cartão de Crédito</label>
      </form>


      <button onClick={() => confirmOrder( restaurantDetail, subtotal )}> Confirmar</button>

    </div>
  )
}
