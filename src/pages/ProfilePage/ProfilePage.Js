import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import { Button, Icon, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {
  ButtonContainer,
  InputsContainer,
  ScreenContainer,
  Line,
  BoxPerfil,
  AddressContainer,
  HistoryContainer
} from "./styled";
import CardHistorico from "../../components/CardHistorico";
import { goToEdit, goToEditAdress } from "../../router/coordinator";

export default function ProfilePage() {
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
      <Typography variant="h6" color={"primary"}>
        Meu Perfil
      </Typography>
      <br></br>
      <InputsContainer>
        <BoxPerfil>
          <p>{states.profile.name}</p>
          <p>{states.profile.email}</p>
          <p>{states.profile.cpf}</p>
        </BoxPerfil>
        <IconButton onClick={()=>goToEdit(navigate)} color="primary" sx={{color: 'black'}}>
          <EditIcon />
        </IconButton>
      </InputsContainer>

      <Typography variant="h6" color={"primary"}>
        Endereço Cadastrado
      </Typography>
      <br></br>

      <AddressContainer>
        <div>
          <p>{states.profile.address}</p>
        </div> 

        <IconButton onClick={()=>goToEditAdress(navigate)} sx={{color: 'black'}}>
          <EditIcon />
        </IconButton>
      </AddressContainer>
      <Typography varivant="h6" color={"primary"}>
        Historico de pedidos:
      </Typography>
      <Line />
      <HistoryContainer>
        {listOfOrder &&
          (listOfOrder.length > 0 ? (
            listOfOrder
          ) : (
            <h4>Voce não realizou nenhum pedido</h4>
          ))}
      </HistoryContainer>
    </ScreenContainer>
  );
}
