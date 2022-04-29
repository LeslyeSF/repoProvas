import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import styled from "styled-components";

export default function OptionsButtons({toggle, setToggle}) {
  
  return(
    <Container>
      <ToggleButtonGroup
      color="primary"
      defaultValue='DISCIPLINAS'
      value={toggle}
      exclusive={true}
      onChange={e=> setToggle(e.target.value)}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}>
        <ToggleButton sx={{
          border: `0px solid #000000`
        }}variant="contained" value="DISCIPLINAS">DISCIPLINAS</ToggleButton>
        <ToggleButton sx={{
          border: `0px solid #000000`
        }} variant="contained" value="PESSOA INSTRUTORA">PESSOA INSTRUTORA</ToggleButton>
        <ToggleButton sx={{
          border: `0px solid #000000`
        }} variant="contained" value="ADICIONAR" >ADICIONAR</ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 25px 0 25px 0;
`;