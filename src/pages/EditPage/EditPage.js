import { Button, TextField, Typography } from "@mui/material";
import React ,{useContext,useEffect} from "react";
import { InputsContainer, ScreenContainer } from "./styled";
import useForm from "../../hooks/useForm";
import GlobalStateContext from "../../context/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import { goToProfilePage } from "../../router/coordinator";
import { updateProfile } from "../../services/users";
import Footer from './../../components/Footer';

export default function EditPage() {
  const {requests} = useContext(GlobalStateContext)
  const navigate = useNavigate()
  const {form,InputChange, clear,setForm} = useForm({name:"",email:"",cpf:""})

  useEffect(()=>{
    requests.getProfile(setForm)
  },[])

  
  
  const onSubmitEdit = (event) => {
    event.preventDefault();
    updateProfile(form)
    clear();
    goToProfilePage(navigate);
  };
  
  return (
    <ScreenContainer>
      <Typography variant="h6" color={"primary"} sx={{color:'black'}}>
        Editar Perfil
      </Typography>
      <InputsContainer>
        <form onSubmit={onSubmitEdit}>
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
          <TextField
            placeholder="CPF"
            name="cpf"
            value={form.cpf}
            onChange={InputChange}
            type="text"
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            label={"CPF"}
            pattern={"([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"}
            required
            minLength="11"
          />
          <Button type="submit" variant='contained' fullWidth color={"primary"}>
            Salvar
          </Button>
        </form>
      </InputsContainer>
    <Footer/>
    </ScreenContainer>
  );
}
