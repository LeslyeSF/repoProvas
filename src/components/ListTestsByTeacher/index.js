import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getTestsByTeachers } from "../../services/api";
import CategoriesList from '../CategoriesList';

export default function ListTestsByTeacher() {
  const [list, setlist] = useState([]);
  useEffect(()=>{
    getTestsByTeachers(localStorage.getItem("repoprovas_token"))
    .then((ans)=>{
      const listAux = ans.data.map((data) => 
        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
            <Typography>{data.teacher}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <CategoriesList tests={data.tests}/>
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
      setlist(listAux);
    })
    .catch(()=> {
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