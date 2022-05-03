import styled from "styled-components";
import Logo from "../../components/Logo";
import Button from '@mui/material/Button';
import { TextField, Divider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { signUp } from "../../services/api";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/userContext";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SignUp(){
  const [showPassword, setShowPassword] = useState(false);
  const { setToken } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState({
    original: "", 
    confirmPassword: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("repoprovas_token") !== null){
      setToken(localStorage.getItem("repoprovas_token"));
      navigate('/home');
    }
  }, [navigate]);
  
  function submitForms(){
    if(password.original === password.confirmPassword){
      signUp({
        email,
        password: password.original
      }).then((ans)=>{
        navigate('/');
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  return(
    <Container>
      <Logo/>
      <ContainerForms>
        <TitleContainer>Cadastro</TitleContainer>
        <GitHubButton>ENTRAR COM O GITHUB</GitHubButton>
        <Divider>ou</Divider>
        <FormSignUp>
          <TextField 
          id="outlined-basic" 
          label="Email" 
          value={email} 
          variant="outlined" 
          onChange={e => setEmail(e.target.value)}/>

          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            label="Senha"
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password.original}
            onChange={e => setPassword({
              original: e.target.value,
              confirmPassword: password.confirmPassword
            })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            label="Senha"
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password.confirmPassword}
            onChange={e => setPassword({
              original: password.original,
              confirmPassword: e.target.value
            })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

          <AreaButton>
            <Button onClick={()=> navigate('/')}>Já possuo cadastro</Button>
            <Button 
            size="small" 
            variant="contained"
            onClick={submitForms}>
              CADASTRAR
            </Button>
          </AreaButton>
        </FormSignUp>
      </ContainerForms>
    </Container>
  );
}
const Container = styled.div`
  width: 475px;
  height: 1vw;

  display: flex;
  flex-direction: column;
  gap: 100px;

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

const FormSignUp = styled.div`
  width: 464px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
`;

const AreaButton = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;