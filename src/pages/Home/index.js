import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header";
import UserContext from "../../contexts/userContext";
import styled from "styled-components";
import ToggleButtons from "../../components/ToggleButtons";
import ListTests from "../../components/ListTests";
import { getTestsByDisciplines, getTestsByTeachers } from "../../services/api";

export default function Home(){
  const { token } = useContext(UserContext);
  const [toggle, setToggle] = useState('DISCIPLINAS');
  const navigate = useNavigate();
  const [data, setData] = useState({
    disciplines:[],
    teachers:[]
  });
  useEffect(()=>{
    const auxData={
      disciplines:[],
      teachers:[]
    };
    getTestsByDisciplines(localStorage.getItem("repoprovas_token"))
    .then((ans)=>{
      auxData.disciplines=ans.data;
    })
    .catch((err)=> console.log(err));

    getTestsByTeachers(localStorage.getItem("repoprovas_token"))
    .then((ans)=>{
      auxData.teachers=ans.data;
    })
    .catch((err)=> console.log(err));

    setData(auxData);
  },[]);
  console.log(data);
  
  return(
    <>
      <Header/>
      <Container>
        <ToggleButtons toggle={toggle} setToggle={setToggle}/>
        <ListTests toggle={toggle} data={data}/>
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

