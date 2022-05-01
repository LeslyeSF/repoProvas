import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from 'styled-components';
import { updateViews } from "../../services/api";

export default function CategoriesList({ tests, filterBy }) {
  console.log(tests);
  const [list, setList] = useState();
  const [views, setViews] = useState(true);
  const navigate = useNavigate();
  useEffect(()=>{
    let arrayCategories = [];
    for(let i = 0; i<tests.length; i++){
      if(arrayCategories.indexOf(tests[i].category) === -1){
        arrayCategories.push(tests[i].category);
      }
    }
    setList(arrayCategories.map((category) => {
      if(filterBy == 'discipline'){
        return(
          <LinkArea>
            <span>{category}</span>
            {tests.map((data)=>
            (data.category === category)?
             <a href={data.pdfUrl} onClick={()=>{
              updateViews(localStorage.getItem("repoprovas_token"), data.idTest);
              setViews(!views);
            }}>
               {data.nameTest} - {data.teacher} ({data.views} views)
             </a> 
             : "")}
          </LinkArea>
        );
      }
      return(
        <LinkArea>
          <span>{category}</span>
          {tests.map((data)=>
          (data.category === category)?
            <a href={data.pdfUrl} onClick={()=>{
              updateViews(localStorage.getItem("repoprovas_token"), data.idTest);
              setViews(!views);
            }}>
             {data.nameTest} - {data.discipline} ({data.views} views)
            </a> 
            : "")}
            
        </LinkArea>
      );
      
    }));
  },[tests, views]);

  return(
    <>
      {list}
    </>
  );
}

const LinkArea = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span{
    font-weight: 700;
  }
  a {
    all: unset;
    font-weight: 400;
  }
  a:hover{
    cursor: pointer;
  }
`;