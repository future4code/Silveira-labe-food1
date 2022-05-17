import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../router/coordinator";
import { InputsContainer, ScreenContainer } from "./styled";
import { Button, TextField, Typography } from "@mui/material";

export default function SignupPage() {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const { form, InputChange, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const onSubmitSignup = (event) => {
    if (form.password === confirmPassword) {
      event.preventDefault();
      clear();
      goToHomePage(navigate);
    } else {
      alert("Senhas divergentes");
    }
  };

  return (
    <ScreenContainer>
      <div>Logo</div>
      <Typography variant="h4" color={"primary"}>
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
            label={""}
            required
          />
          <TextField
            placeholder="000.000.000-00"
            name="cpf"
            value={form.cpf}
            onChange={InputChange}
            type="number"
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            required
            minlength="11"
          />
          <TextField
            placeholder="Senha"
            name="password"
            value={form.password}
            onChange={""}
            type="password"
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            required
            minlength="8"
          />
          <TextField
            placeholder="Confirme a senha"
            name="password"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            type="password"
            required
            minlength="8"
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
          />
          <Button type="submit" fullWidth color={"primary"}>
            Criar
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
}
