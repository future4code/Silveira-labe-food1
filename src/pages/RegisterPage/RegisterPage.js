import { Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { goToHomePage } from "../../router/coordinator";
import { addAddress } from "../../services/users";
import { InputsContainer, ScreenContainer } from "./styled";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { states, setters, request } = useContext(GlobalStateContext);
  const { form, InputChange, clear } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });
  console.log(form);
  const onSubmitRegister = (event) => {
    event.preventDefault();
    clear();
    addAddress(form);
    goToHomePage(navigate);
  };

  return (
    <>
      <ScreenContainer>
        <Typography variant="h6" color={"primary"} sx={{color: 'black'}}>Meu Endereço</Typography>
        <InputsContainer>
          <form onSubmit={onSubmitRegister}>
            <TextField
              name="street"
              value={form.street}
              onChange={InputChange}
              placeholder=" Rua / Av."
              label={"Logradouro"}
              color={"primary"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type="text"
            />

            <TextField
              name="number"
              value={form.number}
              onChange={InputChange}
              placeholder="Número"
              label={"Número"}
              variant={"outlined"}
              color={"primary"}
              fullWidth
              margin={"normal"}
              required
              type="number"
            />
            <TextField
              name="complement"
              value={form.complement}
              onChange={InputChange}
              placeholder="Complemento"
              label={"Complemento"}
              variant={"outlined"}
              color={"primary"}
              fullWidth
              margin={"normal"}
              required
              type={"text"}
            />

            <TextField
              name="neighbourhood"
              value={form.neighbourhood}
              onChange={InputChange}
              placeholder="Bairro"
              label={"Bairro"}
              variant={"outlined"}
              color={"primary"}
              fullWidth
              margin={"normal"}
              required
              type={"text"}
            />

            <TextField
              name="city"
              value={form.city}
              onChange={InputChange}
              placeholder="Cidade"
              label={"Cidade"}
              variant={"outlined"}
              color={"primary"}
              fullWidth
              margin={"normal"}
              required
              type={"text"}
            />

            <TextField
              name="state"
              value={form.state}
              onChange={InputChange}
              placeholder="Estado"
              label={"Estado"}
              variant={"outlined"}
              color={"primary"}
              fullWidth
              margin={"normal"}
              required
              type={"text"}
            />
            <Button type="submit" variant='contained' fullWidth color={"primary"} sx={{'margin-top': '15px'}}>
              Salvar
            </Button>
          </form>
        </InputsContainer>
      </ScreenContainer>
    </>
  );
}
