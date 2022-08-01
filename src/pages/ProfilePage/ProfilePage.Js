import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {
  InputsContainer,
  ScreenContainer,
  Line,
  BoxPerfil,
  AddressContainer,
  HistoryContainer,
  LineHeader,
  Address
} from "./styled";
import CardHistorico from "../../components/CardHistorico";
import { goToEdit, goToEditAdress } from "../../router/coordinator";
import Footer from './../../components/Footer';

export default function ProfilePage () {
  const { states, requests } = useContext(GlobalStateContext);
  const navigate = useNavigate()


  useEffect(() => {
    requests.getProfile();
    requests.getOrdersHistory();
  }, []);

  const listOfOrder =
    states.orderHistory &&
    states.orderHistory.map((order) => {
      return (
        <CardHistorico
          restaurantName={order.restaurantName}
          totalPrice={order.totalPrice}
          createdAt={order.createdAt}
        />
      );
    });

  return (
    <ScreenContainer>
      <Typography variant="h6" sx={{ color: 'black' }}>
        Meu Perfil
      </Typography>
      <LineHeader />
      <br></br>
      <InputsContainer>
        <BoxPerfil>
          <p>{states.profile.name}</p>
          <p>{states.profile.email}</p>
          <p>{states.profile.cpf}</p>
        </BoxPerfil>
        <IconButton onClick={() => goToEdit(navigate)} color="primary" sx={{ color: 'black',position: 'relative', bottom: '25px', }}>
          <EditIcon />
        </IconButton>
      </InputsContainer>

      <Address>
        <Typography variant="h6" color='primary' sx={{ color: '#8E8E93' }}>
          Endereço Cadastrado
        </Typography>

        <AddressContainer>
          <div>
            <p>{states.profile.address}</p>
          </div>

          <IconButton onClick={() => goToEditAdress(navigate)} sx={{ color: 'black',position: 'relative', bottom: '25px' }}>
            <EditIcon />
          </IconButton>
        </AddressContainer>
      </Address>

      <Typography varivant="h6" sx={{ color: 'black' }}>
        Historico de pedidos:
      </Typography>
      <Line />
      <HistoryContainer>
        {listOfOrder &&
          (listOfOrder.length > 0 ? (
            listOfOrder
          ) : (
            <h4>Você não realizou nenhum pedido</h4>
          ))}
      </HistoryContainer>
    <Footer/>
    </ScreenContainer>
  );
};
