import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header";
import styled from "styled-components";
import OptionsButtons from "../../components/OptionsButtons";
import FormAddTest from "../../components/FormAddTest";
import ListTestsByTeacher from "../../components/ListTestsByTeacher";
import ListTestsByDisciplines from "../../components/ListTestsByDisciplines";

export default function Home(){
  const [toggle, setToggle] = useState('DISCIPLINAS');
  const navigate = useNavigate();
  
  useEffect(()=>{
    if (localStorage.getItem("repoprovas_token") === null) navigate('/');  
  },[]);
  
  return(
    <>
      <Header toggle={toggle}/>
      <Container>
        <OptionsButtons toggle={toggle} setToggle={setToggle}/>
        {(toggle === 'ADICIONAR')
        ?<FormAddTest/>
        :(toggle === 'PESSOA INSTRUTORA')
        ?<ListTestsByTeacher/>
        :<ListTestsByDisciplines/>}
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 700px;

  padding: 0 0 100px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap 10px;
`;

