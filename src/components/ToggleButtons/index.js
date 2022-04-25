import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ToggleButtons({toggle, setToggle}) {
  
  return(
    <Container>
      <ToggleButtonGroup
      color="secondary"
      defaultValue='DISCIPLINAS'
      value={toggle}
      exclusive={true}
      onChange={console.log("teste")}
      sx={{
        width: 700,
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <ToggleButton 
        value="DISCIPLINAS" 
        onClick={e=>setToggle(e.target.value)}>
          DISCIPLINAS
        </ToggleButton>
        <ToggleButton value="PESSOA INSTRUTORA" onClick={e=>setToggle(e.target.value)}>PESSOA INSTRUTORA</ToggleButton>
        <ToggleButton value="ADICIONAR" onClick={e=>setToggle(e.target.value)}>ADICIONAR</ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
}
const Container = styled.div`
  padding: 25px 0 25px 0;
`;