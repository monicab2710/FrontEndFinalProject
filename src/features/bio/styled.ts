import styled from "styled-components";

export const BioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`
 
export const ContenedorBotones = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
margin-bottom: 1rem;

`
export const BioImagen = styled.img`
max-width: 200px;
max-height: 300px;
margin-bottom: 1rem;
`

export const Button = styled.button`
border-radius: 5px;
  border: 1px solid darkgray;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 1rem;
  margin: 1rem;
  font-family: "Homer Simpson Revised", sans-serif;
  font-size: 1.4rem;

  color:${props => props.color ? props.color : "black"};
  text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
    -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,
    -2px 0px 0 #000000, 0px -2px 0 #000000;
`
