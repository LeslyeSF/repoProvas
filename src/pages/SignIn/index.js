import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import styled from "styled-components";
import Logo from "../../components/Logo";
import Button from '@mui/material/Button';
import { TextField, Divider } from "@mui/material";
import { useState } from "react";

export default function SignIn(){
  const {user, setUser} = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log(email);
  
  return(
    <Container>
      <Logo/>
      <ContainerForms>
        <TitleContainer>Login</TitleContainer>
        <GitHubButton>ENTRAR COM O GITHUB</GitHubButton>
        <Divider>ou</Divider>
        <FormSignIn>
          <TextField 
          id="outlined-basic" 
          label="Email" 
          value={email} 
          variant="outlined" 
          onChange={e => setEmail(e.target.value)}/>

          <TextField 
          id="outlined-basic" 
          label="Senha" 
          variant="outlined"
          value={password}
          onChange={e => setPassword(e.target.value)} />
          
          <Button>Não possuo cadastro</Button>
          <Button size="small" variant="contained">ENTRAR</Button>
        </FormSignIn>
      </ContainerForms>
    </Container>
  );
}
const Container = styled.div`
  width: 475px;
  height: 1vw;

  display: flex;
  flex-direction: column;
  gap: 185px;

  padding: 55px 0 55px 0;
`;

const ContainerForms = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

`;

const TitleContainer = styled.p`
  font-weight: 500;
  font-size: 24px;
  opacity: 0.8;
`;

const GitHubButton = styled.button`
  all:unset;
  width: 464px;
  height: 36px;

  background-color: #424445;
  color: #FFFFFF;

  display: flex;
  justify-content: center;
  align-items: center; 

  &:hover{
    cursor: pointer;
  }
`;

const FormSignIn = styled.div`
  width: 464px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
`;
