
import styled from "styled-components"

export const MainContainer = styled.div`
color-schema:light dark;
margin:2rem;
`

export const AccordianBoxContainer = styled.div`
display:grid;
grid-template-rows:0fr;
padding:10px;
background-color:orange ;

&>div{
   overflow:hidden; 
}
&:hover{
    transition: grid-template-rows 500ms;
    grid-template-rows:1fr;
}
`
export const Box = styled.div`
border:1px solid red;
height : 250px;
display:flex;
flex-wrap:wrap;
flex-direction:row;
align-items:center;
align-content:center;
`;
export const FlexBox = styled.div`
border:1px solid red;
display:flex;
height:200px;
`
export const FlexItem = styled.div`
    background-color:pink;
    margin:5px;
    &.one{
        flex-grow:1;
        flex-shrink:1;
        flex-basis:200px;
    }
    &.two{
        flex-grow:4;
        flex-shrink:6;
    }
    &.three{
        flex-grow:1;
        flex-shrink:1;
    }
    
`
