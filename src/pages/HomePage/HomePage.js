import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from "../../context/GlobalStateContext"
import CardRestaurant from "../../components/CardRestaurant";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../../assets/image.png";
import styled from "styled-components"
import ActiveOrderComponent from "../../components/ActiveOrderComponent";

const IMG = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width:100%;
`

const InputBusca = styled.input`
width: 330px;
height: 30px;
border-radius: 1px;
display: flex;
flex-wrap: wrap;
padding: 25px;
margin-bottom: 10px;
`
const DivInputs = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px;
`
const DivButton = styled.div`
display:flex;
justify-content: center;
align-items: center;
overflow: auto;
width: 100vw;
margin-top: -15px;
`
const ButtonFilter = styled.div`
size: 30px;
cursor: pointer;
margin: 10px;
:hover {
  color: #E86E5A; 
  transition: 0.5s;
}
`

const EachRestaurant = styled.div `
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

const TextSearch = styled.p`
text-align: center;
`

export default function HomePage() {
  const { states, setters, values, requests } = useContext(GlobalStateContext)
  const { restaurants, pedidoAtivo } = states;
  const { setRestaurants } = setters;
  const { token, headers } = values;
  const { getRestaurants, activeOrder } = requests;
  const [filterRestaurants, setFilterRestaurants] = useState("");
  const [restaurantesFiltrados, setRestaurantesFiltrados] = useState([])
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    getRestaurants();
  }, [])


  //Filtros para as comidas
  const filterAsiaticos = () => {
    let newRestaurants = [];
    if (filtered === "Asiática") {
      setFiltered(false);
    } else { setFiltered("Asiática") };

    restaurants && restaurants.forEach((restaurant) => {
      if (restaurant.category.includes('Árabe') || restaurant.category.includes('Asiática')) {
        newRestaurants.push(restaurant)
      }
    })
    setRestaurantesFiltrados(newRestaurants)
  }


  const filterHamburguer = () => {
    let newRestaurants = [];
    if (filtered === "Hamburguer") {
      setFiltered(false);
    } else { setFiltered("Hamburguer") };

    restaurants && restaurants.forEach((restaurant) => {
      if (restaurant.category.includes('Hamburguer')) {
        newRestaurants.push(restaurant)
      }
    })
    setRestaurantesFiltrados(newRestaurants)
  }


  const filterItaliana = () => {
    let newRestaurants = [];
    if (filtered === "Italiana") {
      setFiltered(false);
    } else { setFiltered("Italiana") };

    restaurants && restaurants.forEach((restaurant) => {
      if (restaurant.category.includes('Italiana')) {
        newRestaurants.push(restaurant)
      }
    })
    setRestaurantesFiltrados(newRestaurants)
  }


  const filterMexicanos = () => {
    let newRestaurants = [];
    if (filtered === "Mexicana") {
      setFiltered(false);
    } else { setFiltered("Mexicana") };

    restaurants && restaurants.forEach((restaurant) => {
      if (restaurant.category.includes('Mexicana')) {
        newRestaurants.push(restaurant)
      }
    })
    setRestaurantesFiltrados(newRestaurants)
  }

  const filterPetiscos = () => {
    let newRestaurants = [];
    if (filtered === "Petiscos") {
      setFiltered(false);
    } else { setFiltered("Petiscos") };

    restaurants && restaurants.forEach((restaurant) => {
      if (restaurant.category.includes('Petiscos')) {
        newRestaurants.push(restaurant)
      }
    })
    setRestaurantesFiltrados(newRestaurants)
  }

  const filterSorvetes = () => {
    let newRestaurants = [];
    if (filtered === "Sorvetes") {
      setFiltered(false);
    } else { setFiltered("Sorvetes") };

    restaurants && restaurants.forEach((restaurant) => {
      if (restaurant.category.includes('Sorvetes')) {
        newRestaurants.push(restaurant)
      }
    })
    setRestaurantesFiltrados(newRestaurants)
  }

  console.log(restaurants, restaurantesFiltrados)

  useEffect(() => {
    getRestaurants();
  }, [])


  //Campo de busca para filtrar restaurantes
  const mapAndFilterRestaurants = (filtered === false) ? (restaurants && (restaurants).filter((res) => {
    return res.name.includes(filterRestaurants)
  })
    .map((rest) => {
      return (
        <EachRestaurant>
        <CardRestaurant key={rest.id}
          id={rest.id}
          name={rest.name}
          logoUrl={rest.logoUrl}
          deliveryTime={rest.deliveryTime}
          shipping={rest.shipping}
          description={rest.description}
        />
        </EachRestaurant>
      )
    })) : (restaurantesFiltrados && (restaurantesFiltrados).filter((res) => {
      return res.name.includes(filterRestaurants)
    })
      .map((rest) => {
        return (
        <EachRestaurant>
          <CardRestaurant key={rest.id}
            id={rest.id}
            name={rest.name}
            logoUrl={rest.logoUrl}
            deliveryTime={rest.deliveryTime}
            shipping={rest.shipping}
            description={rest.description}
          />
        </EachRestaurant>
        )
      })
  )

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    activeOrder();
  }, [])

  return (
    <div>
      {isLoading ? <IMG src={Image} alt="Logo da rappi4A" /> :
        <>
          <DivInputs>
            <InputBusca
              type="text"
              value={filterRestaurants}
              onChange={(ev) => setFilterRestaurants(ev.target.value)}
              placeholder="Restaurante"
            />
          </DivInputs>

          <DivButton>
            <ButtonFilter onClick={filterAsiaticos}>Asiática</ButtonFilter>
            <ButtonFilter onClick={filterHamburguer}>Burger</ButtonFilter>
            <ButtonFilter onClick={filterItaliana}>Italiana</ButtonFilter>
            <ButtonFilter onClick={filterMexicanos}>Mexicana</ButtonFilter>
            <ButtonFilter onClick={filterPetiscos}>Petiscos</ButtonFilter>
            <ButtonFilter onClick={filterSorvetes}>Sorvetes</ButtonFilter>
          </DivButton>
          {pedidoAtivo && <ActiveOrderComponent />}

          {mapAndFilterRestaurants.length === 0 ? <TextSearch>Não encontramos 🥺</TextSearch> : mapAndFilterRestaurants}</>
      }
    </div>

  )
}