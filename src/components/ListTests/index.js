import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import SubListTests from '../SubListTests';
import { useEffect, useState } from 'react';

export default function ListTests({data, toggle}) {
  const [list, setList] = useState("");

  useEffect(()=>{
    if(toggle==="DISCIPLINAS"){
      setList(data.disciplines.map((item)=> <SubListTests data={item} toggle={toggle}/> ));
    } else if(toggle==="PESSOA INSTRUTORA"){
      setList(data.teachers.map((item)=> <SubListTests data={item} toggle={toggle}/> ));
    }
  },["",toggle]);
  
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      {list}
    </List>
  );
}