import { useContext, useEffect } from "react";
import UserContext from "../../contexts/userContext";
import styled from "styled-components";
import Logo from "../../components/Logo";
import Button from '@mui/material/Button';
import { TextField, Divider } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { signIn } from "../../services/api";
import { verifyAndsetToken } from "../../services/tokenService";

export default function SignIn(){
  const { setToken } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  
  useEffect(verifyAndsetToken(setToken, navigate),[]);

  function submitForms(){
    signIn({
      email,
      password
    })
    .then((ans)=>{
      localStorage.setItem("repoprovas_token",ans.data.token);
      setToken(ans.data.token);
      navigate('/home');
    })
    .catch ((err)=>{
      console.log(err);
    }) 
  }
  
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
          
          <Button onClick={()=> navigate('/signup')}>Não possuo cadastro</Button>
          <Button 
          size="small" 
          variant="contained" 
          onClick={submitForms}>
            ENTRAR
          </Button>
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
