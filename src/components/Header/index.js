import Logo from "../Logo";
import styled from "styled-components";
import LogOut from "../LogOut";
import { TextField } from "@mui/material";

export default function Header() {
  return(
    <Container>
      <SubContainer>
        <Logo/>
        <LogOut/>
      </SubContainer>
      <SubContainer>
        <TextField 
        id="searchHeader" 
        label="Pesquise por disciplina" 
        variant="outlined"/>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 250px;

  padding: 0 50px 0 50px;

  background-color: #FFFFFF;

  border-bottom: 1px solid #C4C4C4;

  display: flex;
  flex-direction: column;
  gap: 0;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 125px;

  padding: 30px 0 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-child(2){
    justify-content: center;
    #searchHeader{
      width: 500px;
      height: 20px;
    }
  }
`;