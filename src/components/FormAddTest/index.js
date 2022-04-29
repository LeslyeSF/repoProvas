import { useState } from 'react';
import styled from 'styled-components';
import { 
  TextField, 
  Select, 
  Button,
  MenuItem, 
  InputLabel, 
  FormControl } from "@mui/material";

export default function FormAddTest() {
  const [form, setForm] = useState({
    title:"",
    pdfUrl: "",
    categoryId: "",
    disciplineId:"",
    teacherId:""
  });

  function handleSubmit() {
    //e . funcao para submit
   alert("foi") ;
  }
  return(
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField 
        id="outlined-basic" 
        label="Titulo da prova" 
        value={form.title} 
        variant="outlined" 
        onChange={e => {
        form.title=e.target.value;
          setForm({...form});
        }}/>
        <TextField 
        id="outlined-basic" 
        label="PDF da prova" 
        value={form.pdfUrl} 
        variant="outlined" 
        onChange={e => {
        form.pdfUrl=e.target.value;
        setForm({...form});
        }}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={form.categoryId}
          label="Categoria"
          onChange={(e)=> {
            form.categoryId = e.target.value;
            setForm({...form})
          }}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Disciplina</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={form.disciplineId}
          label="Disciplina"
          onChange={(e)=> {
            form.disciplineId = e.target.value;
            setForm({...form})
          }}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Pessoa Instrutora</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={form.teacherId}
          label="Pessoa Instrutora"
          onChange={(e)=> {
            form.teacherId = e.target.value;
            setForm({...form})
          }}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button type='submit'
        variant="contained" >
          ADICIONAR
        </Button>
      </form>
    </Container>
  );
  
}

const Container = styled.div`
  width: 700px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;