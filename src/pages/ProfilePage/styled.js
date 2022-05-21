import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px; 
  width: 100vw;
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  width: 94vw;
  height: 15vh;
  line-height: 9.0px;
  margin-top: -35px;
  margin-bottom: -2px;
  justify-content: space-between;
 `;
export const BoxPerfil = styled.div`
  width: 70%;
  height: 75%;
  position: relative;
  top: 0;
`;
export const Line = styled.hr`
  width: 93%;
  border: 1px solid black;
`;
export const LineHeader = styled.hr`
  width: 100%;
  border: 1px solid black;
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EFEFF4;
  margin-bottom:20px ;
  font-size: 15px;
  padding: 10px 0 0 30px;
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 450px;
  align-items: center;
  justify-content: space-around;
  position: relative;
  right: 12px;
  width:100vw;
`;
export const HistoryContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  border-radius: 12px;
`
