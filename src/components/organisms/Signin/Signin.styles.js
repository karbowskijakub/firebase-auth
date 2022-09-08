import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper =styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;



`
export const Container = styled.div`
width:600px;
height:900px;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
border: 2px solid black;
background:#cbcbcb;
display:flex;
flex-direction:column;
border-radius:15px;

`

export const StyledLink = styled(Link)`
text-decoration:underline;
color:black;

`

export const Informations = styled.div`
margin:10px 20px;
`
export const FormField = styled.form`
display:flex;
flex-direction:column;

`

export const Label = styled.label`
font-weight:bold;
margin:10px 20px;
`
export const Input =styled.input`
width:100%
height:80px;
padding:20px 10px;
margin:10px 20px;
border-radius:10px;
border:none;
outline:none;

`

export const Button = styled.button`
max-width:100%;
height:80px;
border-radius:15px;
background:#444444;
margin:20px;
margin-top:70px;
color:#fff;
font-size:18px;
font-weight:bold;
cursor:pointer;
transition: 0.8s ease;

&:hover,
&:focus {
  box-shadow: inset 0 0 0 2em var(--hover);
  background-color:black;
}

`




{/* <Wrapper>
<Container>
  <Informations>
    <h1></h1>
    <p></p>
  </Informations>
  <FormField>
  <label></Label>
    <Input></Input>
    <label></label>
    <Input></Input>
  </FormField>
  <Button />
</Container>
</Wrapper> */}