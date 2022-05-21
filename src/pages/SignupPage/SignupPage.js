import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToRegisterPage } from "../../router/coordinator";
import { InputsContainer, LogoImage, ScreenContainer, TextFieldCpf } from "./styled";
import { Button, TextField, Typography } from "@mui/material";
import Logo from '../../assets/Logo.png'
import axios from 'axios'


export default function SignupPage() {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const { form, InputChange, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  // const inputPropsCpf = {
  //   pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
  // }

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmitSignup = (event) => {
    event.preventDefault()
    if (form.password === confirmPassword) {
    axios.post(`${BASE_URL}/signup`, form)
    .then((resp)=>{
        console.log(resp.data.token)
        localStorage.setItem('token', resp.data.token)
        alert("Usuario criado!")
        goToRegisterPage(navigate)
    })
    .catch((err) =>{
        console.log(err.data)
        alert("Erro ao criar usuário!")
    })
  }
  else {
    alert("Senhas divergentes")
  }
  };

  console.log(form.password, confirmPassword)
  console.log(form)
  
  
  return (
    <ScreenContainer>
      <LogoImage src={Logo}/>
      <Typography variant="h6" color={"primary"} sx={{color:'black'}}>
        Cadastrar
      </Typography>
      <InputsContainer>
        <form onSubmit={onSubmitSignup}>
          <TextField
            placeholder="Nome e sobrenome"
            name="name"
            value={form.name}
            onChange={InputChange}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Nome e sobrenome"}
            required
          />
          <TextField
            placeholder="email@email.com"
            name="email"
            value={form.email}
            onChange={InputChange}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            label={"E-mail"}
            required
          />
          <TextFieldCpf
            placeholder="000.000.000-00"
            name="cpf"
            value={form.cpf}
            onChange={InputChange}
            type="number"
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            label={"CPF"}
            required
          />
          <TextField
            placeholder="Senha"
            name="password"
            value={form.password}
            onChange={InputChange}
            type="password"
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Senha"}
            required
            minLength="8"
          />
          <TextField
            placeholder="Confirme a senha"
            name="password"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            type="password"
            required
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Confirme sua senha"}
            minLength="8"
            

          />
          <Button type="submit" variant='contained' fullWidth color={"primary"} sx={{color:'black', 'margin-top': '15px'}}>
            Criar
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
}
