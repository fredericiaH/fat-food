import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme';



export default function LoginForm() {
    //States
const [name, setName] = useState("");
const navigate = useNavigate();
//Components
const handleChange = (e) =>{
  e.preventDefault();
  setName(e.target.value);
  
}


const handleSubmit = (e) =>{
  e.preventDefault();
  navigate(`order/${name}`);

}

//Render
  return (
    <LoginFormStyled action='submit'onSubmit={handleSubmit}>
        <h1>bienvenue chez nous !</h1>  
        <hr/>
        <h2>Connectez-vous</h2>
        <input value={name} onChange={handleChange} placeholder='Entrez votre prenom' required />
        <button>Accéder à votre espace</button>
    </LoginFormStyled>
  )
}


const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: "Amatic SC", cursive;
  font-weight: ${theme.weights.bold};
  text-transform: uppercase;

  

  h1{
    
    //font-size: 15px;
    justify-text: center;

  }

  hr{
    width: 85%;
    border: 2px solid ${theme.colors.redSecondary};
  }

  h2{
    padding-top: 10px;
  }

  input{
    width: 73%;
    height: 40px;
    padding-left: 10%;
    padding-right: 2%;
    border-radius: ${theme.borderRadius.round};
  }

  button{
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    margin-top: 10px;
    width: 86%;
    height: 45px;


    border-radius: ${theme.borderRadius.round};
  }
`

