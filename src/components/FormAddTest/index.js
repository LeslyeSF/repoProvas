import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { 
  TextField, 
  Select, 
  Button,
  MenuItem, 
  InputLabel, 
  FormControl } from "@mui/material";
import Swal from 'sweetalert2';
import { getCategories, getTeachersDisciplines, insertTest } from '../../services/api';

export default function FormAddTest() {
  const [form, setForm] = useState({
    title:"",
    pdfUrl: "",
    categoryId: "",
    discipline:"",
    teacherDisciplineId:""
  });
  const [categories, setCategories] = useState([]);
  const [teacherDiscipline, setTeacherDiscipline] = useState([]);
  console.log(form.teacherDisciplineId);

  useEffect(()=>{
    getCategories(localStorage.getItem("repoprovas_token"))
    .then((ans)=>{
      setCategories(ans.data.categories);
    })
    .catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao carregar dados!'
      });
    });

    getTeachersDisciplines(localStorage.getItem("repoprovas_token"))
    .then((ans)=>{
      console.log(ans.data);
      setTeacherDiscipline(ans.data);
    })
    .catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao carregar dados!'
      });
    });
  },[]);
  

  function handleSubmit(e) {
    e.preventDefault();
    const body =  {
      name: form.title,
      pdfUrl: form.pdfUrl,
      categoryId: form.categoryId,
      teacherDisciplineId: form.teacherDisciplineId
    }
    insertTest(localStorage.getItem("repoprovas_token"), body)
    .then(()=>{
      Swal.fire({
        icon: 'Success',
        title: 'Show...',
        text: 'Teste cadastrado com sucesso!'
      });
      setForm({
        title:"",
        pdfUrl: "",
        categoryId: "",
        discipline:"",
        teacherDisciplineId:""
      });

    })
    .catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao carregar dados!'
      });
    });
   
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
            {(categories.length>0)
            ?categories.map((data)=> <MenuItem value={data.id}>{data.name}</MenuItem>)
            : ""}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Disciplina</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={form.discipline}
          label="Disciplina"
          onChange={(e)=> {
            form.discipline = e.target.value;
            setForm({...form})
          }}>
            {(teacherDiscipline.length>0)
            ?teacherDiscipline.map((data)=> <MenuItem value={data.discipline}>{data.discipline}</MenuItem>)
            : ""}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Pessoa Instrutora</InputLabel>
          <Select
          disabled = {(form.discipline === "")? true : false}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={form.teacherDisciplineId}
          label="Pessoa Instrutora"
          onChange={(e)=> {
            form.teacherDisciplineId = e.target.value;
            setForm({...form})
          }}>
            {(form.discipline !== "")
            ? teacherDiscipline.map((data) => {
              if(data.discipline === form.discipline){
                return data.teachers.map(
                  (data)=> <MenuItem value={data.teachersDisciplinesId}>{data.teacher}</MenuItem>
                );
              }
            }):""}
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