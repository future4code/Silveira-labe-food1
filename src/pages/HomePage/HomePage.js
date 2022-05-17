import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from "../../context/GlobalStateContext"
import CardRestaurant from "../../components/CardRestaurant";


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

  return (
    <div>
   
      <div>
        <p>Search:</p>
        <input
          type="text"
          value={filterRestaurants}
          onChange={(ev) => setFilterRestaurants(ev.target.value)}
        />
      </div>

      <button onClick={filterAsiaticos}>Asiática</button>
      <button onClick={filterHamburguer}>Burger</button>
      <button onClick={filterItaliana}>Italiana</button>
      <button onClick={filterMexicanos}>Mexicana</button>
      <button onClick={filterPetiscos}>Petiscos</button>
      <button onClick={filterSorvetes}>Sorvetes</button>
      {mapAndFilterRestaurants}
    </div>
  )
}