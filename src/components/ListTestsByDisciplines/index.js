import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { getTestsByDisciplines } from "../../services/api";
import CategoriesList from '../CategoriesList';

export default function ListTestsByDisciplines() {
  const [list, setList] = useState([]);
  useEffect(()=>{
    getTestsByDisciplines(localStorage.getItem("repoprovas_token"))
    .then((ans)=>{
      const listAux = ans.data.map((data) => 
        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
            <Typography>{data.term} Período</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {data.disciplines.map((subdata)=>
                <Accordion>
                  <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                    <Typography>{subdata.discipline}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <CategoriesList tests={subdata.tests} filterBy='discipline'/>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
      setList(listAux);
    })
    .catch((err)=> {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao carregar dados!'
      });
    });

  },[]);
  return(
    <Container>
      {list}
    </Container>
  );
}

const Container = styled.div`
  width: 700px;

  display: flex;
  flex-direction: column;
  gap: 0px;
`;