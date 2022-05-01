import { useContext } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import UserContext from "../../contexts/userContext";
import { logOut } from "../../services/api";
import Swal from 'sweetalert2';

export default function LogOut() {
  const token = localStorage.getItem("repoprovas_token");
  const navigate = useNavigate();

  function clickLogOut() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        logOut(token)
        .then(()=>{
          localStorage.removeItem("repoprovas_token");
          navigate('/');
        })
        .catch(()=>{
          console.log("falha logout");
        });
      }
    })
    
  }

  return(
    <Container onClick={clickLogOut}>
      <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.1111 27V21.6H10.6667V14.4H23.1111V9L32 18L23.1111 27ZM19.5556 0C20.4985 0 21.4029 0.379284 22.0697 1.05442C22.7365 1.72955 23.1111 2.64522 23.1111 3.6V7.2H19.5556V3.6H3.55556V32.4H19.5556V28.8H23.1111V32.4C23.1111 33.3548 22.7365 34.2705 22.0697 34.9456C21.4029 35.6207 20.4985 36 19.5556 36H3.55556C2.61256 36 1.70819 35.6207 1.0414 34.9456C0.374602 34.2705 0 33.3548 0 32.4V3.6C0 2.64522 0.374602 1.72955 1.0414 1.05442C1.70819 0.379284 2.61256 0 3.55556 0H19.5556Z" fill="black"/>
      </svg>
    </Container>
  );
}

const Container = styled.div`
  &:hover{
    cursor:pointer;
  }
`;