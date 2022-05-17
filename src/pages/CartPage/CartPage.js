import React, { useState } from 'react'
import { DivTitle, Line, DivEndereco, DivEnderecoPessoa, DivEntrega, DivNomeRest } from './styled'
import { DivRestaurante, DivTempo, DivEndRest, DivFrete, DivSubtotal, DivSubValor } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import CardsRestaurant from '../../components/CardRestaurant'

export default function CartPage(props) {
  
  // const {name, price} = restaurantDetail.products
  // const {shipping, products, address} = restaurantDetail

  // const listaCarrinho = props.carrinho.map((item) => {
  //   return (
  //     <CardsRestaurant
  //       key={item.id}
  //     />
  //   )
  // })

  const totalFrete = () => {

  }
  // const frete = carrinho.reduce((acumulador, produto) => acumulador+carrinho.shipping*, 0)
  const subtotal = () => {

  }
  // const subotal = carrinho.reduce((acumulador, produto) => acumulador+carrinho.price*produto.quantidade, 0)


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

  const placeOrder = (id, address, subtotal) => {
    const url = `${BASE_URL}/restaurants/${id}/order`
    const token = window.localStorage.getItem("token");
    const headers = {
        headers: {
            auth: token          
        }
    }
        axios
        .post(url, headers)
        .then((res)=>{
            alert(`Pedido em Andamento ${address} Subtotal: ${subtotal}`)
        })
        .catch((err) => {
            console.log(err)
        })
    }

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

      {/* {listaCarrinho} */}

      <DivFrete>Frete: R$ {totalFrete}</DivFrete>

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


      <button onClick={() => placeOrder()}> Confirmar</button>







    </div>
  )
}
