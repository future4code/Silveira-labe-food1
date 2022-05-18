import { Button, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../../context/GlobalStateContext'
import useForm from '../../hooks/useForm'
import { goToProfilePage } from '../../router/coordinator'
import { addAddress } from "../../services/users";
import { InputsContainer, ScreenContainer } from './styled'

export default function EditAdress() {
  const {requests} = useContext(GlobalStateContext)
  const navigate = useNavigate()
  const {form,InputChange, clear,setForm} = useForm({neighbourhood:"",number:"",city:"",apartament:"",state:"",street:""})
  
  useEffect(()=>{
    requests.getAddress(setForm)
  },[])
  
  const onSubmitEditAddress = (event) => {
    event.preventDefault();
    addAddress(form)
    clear();
    goToProfilePage(navigate);
  };
  
  return (
   
      <ScreenContainer>
        <Typography variant="h4" color={"primary"}>Editar meu endereço:</Typography>
        <InputsContainer>
          <form onSubmit={onSubmitEditAddress} >
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
            <Button type="submit" variant='contained'fullWidth color={"primary"}>
              Salvar
            </Button>
          </form>
        </InputsContainer>
      </ScreenContainer>
   
  )
}