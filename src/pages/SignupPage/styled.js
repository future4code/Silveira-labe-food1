import styled from "styled-components";
// import { TextField } from "@mui/material";
import TextField from '@mui/material/TextField';

export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 450px;
align-items: center;
margin-bottom: 20px;
width: 80vw;
`;

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55px;
  width: 100vw;
`;

export const LogoImage = styled.img`
    width: 15vw;
    max-width: 350px;
    padding-top: 6px;
    margin-bottom: 15px;
`
export const Button = styled.button`
    margin-top: 5px;
`;

export const TextFieldCpf = styled(TextField)`
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`