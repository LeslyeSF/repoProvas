import { useContext, useEffect } from "react";
import UserContext from "../../contexts/userContext";
import styled from "styled-components";
import Logo from "../../components/Logo";
import { useState } from "react";
import { useNavigate } from "react-router";
import { signIn } from "../../services/api";
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Swal from "sweetalert2";

export default function SignIn(){
  const { setToken } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem("repoprovas_token") !== null){
      setToken(localStorage.getItem("repoprovas_token"));
      navigate('/home');
    }
  }, [navigate]);

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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao carregar dados!'
      });
    }) 
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
        <TitleContainer>Login</TitleContainer>
        <GitHubButton>ENTRAR COM O GITHUB</GitHubButton>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "16px",
          marginBottom: "26px",
        }}>
          <Divider sx={{ flex: "1" }} />
          <Typography variant="caption" component="span">
            ou
          </Typography>
          <Divider sx={{ flex: "1" }} />
        </Box>
        <FormSignIn>
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
            value={password}
            onChange={e => setPassword(e.target.value)}
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
            <Button onClick={()=> navigate('/signup')}>N??o possuo cadastro</Button>
            <Button 
            size="small" 
            variant="contained" 
            sx={{width: 86}}
            onClick={submitForms}>
              ENTRAR
            </Button>
          </AreaButton>
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

const FormSignIn = styled.div`
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
