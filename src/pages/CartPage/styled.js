import styled from 'styled-components'

export const DivTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 10px;
`

export const Line = styled.div`
    border: none;
    height: 1px;
    background-color: #333; 
`

export const DivEndereco = styled.div`
    color:#D1D1D6; 
`
export const DivEnderecoPessoa = styled.div`
    font-weight: bold;
`

export const DivEntrega = styled.div`
    color: black; 
    height: 15vh;
`
export const DivRestaurante = styled.div`
height: 15vh;
`
export const DivNomeRest = styled.div`
color:#E86E5A;
`
export const DivEndRest = styled.div`
color:black; 
`
export const DivTempo = styled.div`
color:black; 
`
export const DivFrete = styled.div`
font-weight: bold;
text-align: right;
`

export const DivSubtotal= styled.div`
 display: flex;
flex-direction: row;
justify-content: space-between;
`

export const DivSubValor = styled.div`
color:#E86E5A;
`

export const ButtonAdd = styled.button`
border: none;
border-radius: 15px 0px 15px 0px;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
background-color: white;
color: black;
border: 2px solid #555555;
`

export const ButtonRem= styled.button`
border: none;
border-radius: 15px 0px 15px 0px;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
background-color: white;
color: red;
border: 2px solid #555555;
`