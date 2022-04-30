import styled from "styled-components";
import { keyframes } from 'styled-components'


export const Mouse = styled.span`
width: 25px;
height: 50px;
border: 2px solid #fff;
border-radius: 20px;
display: flex;
`;

export const MoveWheel = keyframes`
0% {
        opacity: 0;
        transform: translateY(-1rem);
    }
    100% {
        opacity: 1;
        transform: translateY(1rem);
    }

`;

export const MouseWheel = styled.span`
display: block;
width: 10px;
height: 10px;
background-color: #fff;
border-radius: 50%;
margin: auto;
animation: ${MoveWheel} 2s;
animation-iteration-count: infinite;
`;

