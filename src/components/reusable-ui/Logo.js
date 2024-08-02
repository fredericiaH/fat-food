import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

export default function Logo() {
  return (
    <LogoStyled>
        <h1>crazee</h1>
        <img src="/images/f03lo.png"/>
        <h1>burger</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    transform: scale(1.5);

    h1{
    
        color: ${theme.colors.primary_burger};
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.P4};
        //line-height: 1em;
        font-weight: ${theme.weights.bold};
        font-letter: 1.5px;
        text-align: center;
        letter-spacing: 2.5px;
        text-transform: uppercase;
    }

    img{
        //object-fit: contain;
        //object-position: center;
        margin: 2.5px;
        width: 60px;
        
        
    }
`
