import React, {useContext, useEffect} from 'react'
import GlobalStateContext from '../../context/GlobalStateContext'
import styled from 'styled-components'

const ProfileMainContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

`
const ProfileCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 360px;
  height: 250px;
  border: 1px solid black;
  margin: 10px;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  border: 1px solid black;
  width: 60%;
  margin: 10px;

`

export default function ProfilePage() {
  const { states, setters, requests } = useContext(GlobalStateContext)
  // console.log(requests)

  useEffect(()=>{
    requests.getProfile()
  },[])

  
  return (
    <ProfileMainContainer>
      <h3>ProfilePage</h3>
      <ProfileCardContainer>
        <InfoContainer>
          <p>{states.profile.name}</p>
          <p>{states.profile.email}</p>
          <p>{states.profile.cpf}</p>
        </InfoContainer>
        <button>edit</button>
      </ProfileCardContainer>
      <ProfileCardContainer>
        <div>
          <p>Endereço cadastrado</p>
          <p>{states.profile.address}</p>
        </div>
        <button>edit</button>
      </ProfileCardContainer>
      <h3>Historico</h3>
      <hr></hr>
      <div>
        area de historico de pedidos
      </div>


    </ProfileMainContainer>
  )
}
