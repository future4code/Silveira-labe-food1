import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { goToHomePage, goToSignUpPage, goToRegisterPage } from "../../router/coordinator";
import { InputsContainer, ScreenContainer, LogoImage } from "./styled";
import { Button, TextField,Typography } from "@mui/material";
import Logo from '../../assets/Logo.png'


export default function LoginPage() {
  let navigate = useNavigate();

  const { form, InputChange, clear } = useForm({
    email: "",
    password: ""
  })

  // const body = form

  const login = (event) => {
    event.preventDefault();
    const body = form

    axios
      .post('https://us-central1-missao-newton.cloudfunctions.net/rappi4A/login', body)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        if (res.data.user.hasAddress === false) {
          alert(
            `${res.data.user.name}, you do not have an account. We will redirect you...`
          );
          goToRegisterPage(navigate);
        } else {
          alert("Welcome!")
          goToHomePage(navigate);
        }
        clear();
      })
      .catch((error) => {
        console.log(error)
        alert("Error. Try again!")
      })
  }

  return (
    <ScreenContainer>
       <LogoImage src={Logo}/>
      <Typography variant="h6" color={"primary"} sx={{color: 'black'}}>
        Entrar
      </Typography>
      <InputsContainer>
        <form onSubmit={login}>
          <TextField
            name={"email"}
            value={form.email}
            onChange={InputChange}
            type={"email"}
            placeholder="Email"
            required
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Digite seu e-mail"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={InputChange}
            type={"password"}
            placeholder="Password"
            required
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Digite sua senha"}
          />
          <Button variant='contained' type="submit" sx={{color: 'black'}} fullWidth>Entrar</Button>
        </form>
        <Button fullWidth onClick={() => goToSignUpPage(navigate)} sx={{color:'black', 'margin-top': '15px'}}><strong>Não possui cadastro? Clique aqui.</strong></Button>
      </InputsContainer>
    </ScreenContainer>
  )
}
