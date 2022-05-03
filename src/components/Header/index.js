import Logo from "../Logo";
import styled from "styled-components";
import LogOut from "../LogOut";
import { TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";
import { getAllTests } from "../../services/api";

export default function Header({ toggle }) {
  const [list, setList] = useState([]);
  const [urlList, setUrlList] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(()=>{
    getAllTests(localStorage.getItem("repoprovas_token"))
      .then((ans)=>{
        let urls = [];
        const dataList = ans.data.map((data)=>{
          console.log("data", ans.data);
          if(toggle === 'DISCIPLINAS'){
            urls.push(data.pdfUrl);
            return `${data.teacherDiscipline.discipline.name} - ${data.name}`;
          } else {
            urls.push(data.pdfUrl);
            return `${data.teacherDiscipline.teacher.name} - ${data.name}`;
          }
        });
        setList(dataList);
        setUrlList(urls);
      })
      .catch(()=>console.log("erro"));
  },[toggle]);

  return(
    <Container>
      <SubContainer>
        <Logo/>
        <LogOut/>
      </SubContainer>
      <SubContainer>
        {(toggle !== 'ADICIONAR')?
          <Stack spacing={2} sx={{ width: 500 }}>
          <Autocomplete
          id="search"
          value={search}
          onChange={(e, n) => setSearch(n)}
          options={list}
          isOptionEqualToValue={()=> {
            const index = list.indexOf(search);
            const url = urlList[index];
            if(url){
              window.location.href = url;
            }
            
          }}
          renderInput={(params) => 
          <TextField {...params} 
          label={(toggle === 'DISCIPLINAS')?
          "Pesquisar por disciplina" : 
          "Pesquisar por pessoa instrutora"}
         />}
          />
          </Stack>
           
        : ""}
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 250px;

  padding: 0 50px 0 50px;

  background-color: #FAFAFA;

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