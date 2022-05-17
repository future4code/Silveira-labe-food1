import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../context/GlobalStateContext'
import { useParams, useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { goToHomePage } from "../../router/coordinator";
import CenteredModal from "../../components/CenteredModal";



const IMG = styled.img`
width: 300px;
`
const DivProdutos = styled.div`
  word-wrap: break-word;
  width: 300px;
`


export default function DetailsPage() {
  const { states, setters, requests, values } = useContext(GlobalStateContext);
  const { restaurants, restaurantDetail } = states;
  const { setRestaurants, setRestaurantDetail } = setters;
  const { getRestaurants, getRestaurantDetail } = requests;
  const { token, headers } = values;
  const [carrinho, setCarrinho] = useState ( // Cart
    {
      id: "",
      quantidade:0
    }
  )
  // const [addButton, setAddButton] = useState(quantidade === 0 ? "Adicionar" : "Remover") // CART
  const params = useParams();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getRestaurants();
    getRestaurantDetail(params.id);

  }, [])

  const adicionarCarrinho = (produtos) => {
    setModalShow(true);
}


const productsMap = restaurantDetail.products && restaurantDetail.products.map((product) => {
  return (
    <DivProdutos key={product.id}>
      <IMG src={product.photoUrl} alt={product.photoUrl} />
      <p>{product.name}</p>
      <span>{product.description}</span>
      <p><strong>Preço: </strong>R$ {product.price},00</p>
      <button onClick={() => adicionarCarrinho()}>Adicionar</button>
    </DivProdutos>
  )
})


return (
  <div>
    <button onClick={() => goToHomePage(navigate)}>Voltar</button>
    {productsMap}
    <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </div>
)
}
