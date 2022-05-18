import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from "../../context/GlobalStateContext"
import CardRestaurant from "../../components/CardRestaurant";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../../assets/image.png";
import styled from "styled-components"

const IMG = styled.img`
/* background-image: url('./assets/image.png');
background-size: contain; */
display: block;
margin-left: auto;
margin-right: auto;
width:100%
`


export default function HomePage() {
  const { states, setters, values, requests } = useContext(GlobalStateContext)
  const { restaurants } = states;
  const { setRestaurants } = setters;
  const { token, headers } = values;
  const { getRestaurants } = requests;
  const [filterRestaurants, setFilterRestaurants] = useState("");
  const [restaurantesFiltrados, setRestaurantesFiltrados] = useState([])
  const [ filtered, setFiltered ] = useState(false);

  useEffect(() => {
    getRestaurants();
  }, [])


  //Filtros para as comidas
  const filterAsiaticos = () => {
    let newRestaurants = [];
    if (filtered === "Asiática") {
      setFiltered(false);
    }    else {setFiltered("Asiática")};
      
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
    }    else {setFiltered("Hamburguer")};

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
    }    else {setFiltered("Italiana")};

    restaurants && restaurants.forEach((restaurant) => {
      if (restaurant.category.includes('Italiana')) {
        newRestaurants.push(restaurant)
      }
    })
    setRestaurantesFiltrados(newRestaurants)
  }


  const filterMexicanos = ()   => {
    let newRestaurants = [];
    if (filtered === "Mexicana") {
      setFiltered(false);
    }    else {setFiltered("Mexicana")};
          
    restaurants && restaurants.forEach((restaurant) => {
      if (restaurant.category.includes('Mexicana'))  {
        newRestaurants.push(restaurant)
      }
    })
    setRestaurantesFiltrados(newRestaurants)
  }

  const filterPetiscos = ()   => {
    let newRestaurants = [];
    if (filtered === "Petiscos") {
      setFiltered(false);
    }    else {setFiltered("Petiscos")};
    
    restaurants && restaurants.forEach((restaurant) => {
      if (restaurant.category.includes('Petiscos')) {
        newRestaurants.push(restaurant)
      }
    })
    setRestaurantesFiltrados(newRestaurants)
  }

  const filterSorvetes = ()   => {
    let newRestaurants = [];
    if (filtered === "Sorvetes") {
    setFiltered(false);
  }    else {setFiltered("Sorvetes")};
    
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
// clica aqui
  //Campo de busca para filtrar restaurantes
  const mapAndFilterRestaurants = (filtered === false) ? (restaurants && (restaurants).filter((res) => {
    return res.name.includes(filterRestaurants)
  })
    .map((rest) => {
      return (
        <CardRestaurant key={rest.id}
          id={rest.id}
          name={rest.name}
          logoUrl={rest.logoUrl}
          deliveryTime={rest.deliveryTime}
          shipping={rest.shipping}
          description={rest.description}
        />
      )
    })) : (restaurantesFiltrados && (restaurantesFiltrados).filter((res) => {
      return res.name.includes(filterRestaurants)
    })
    .map((rest) => {
      return (
        <CardRestaurant key={rest.id}
          id={rest.id}
          name={rest.name}
          logoUrl={rest.logoUrl}
          deliveryTime={rest.deliveryTime}
          shipping={rest.shipping}
          description={rest.description}
        />
    )})
)

const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div>   
{isLoading ? <IMG src={Image} alt="Logo da rappi4A" /> :
<>
      <div>
        <p>Search:</p>
        <input
          type="text"
          value={filterRestaurants}
          onChange={(ev) => setFilterRestaurants(ev.target.value)}
        />
      </div>

      <Button variant="outline-primary" onClick={filterAsiaticos}>Asiática</Button>
      <Button variant="outline-primary" onClick={filterHamburguer}>Burger</Button>
      <Button variant="outline-primary" onClick={filterItaliana}>Italiana</Button>
      <Button variant="outline-primary" onClick={filterMexicanos}>Mexicana</Button>
      <Button variant="outline-primary" onClick={filterPetiscos}>Petiscos</Button>
      <Button variant="outline-primary" onClick={filterSorvetes}>Sorvetes</Button>
      {mapAndFilterRestaurants}</>
}
    </div>   

  )
}