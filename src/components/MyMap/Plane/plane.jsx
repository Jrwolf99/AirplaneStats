import React, { useEffect } from 'react'
import styled from 'styled-components';
import { IoAirplane } from "react-icons/io5"
import useProjection from '../../../hooks/useProjection';
import usePlane from './usePlane';
import Particle from './particle';


const StyledPlane = styled.div`
color: #ffffff;
font-size: 2rem;
border-radius: 50%;
position: absolute;
left: ${props => props.x}px;
bottom: ${props => props.y}px;
transition:  all 1s ease-in-out;
scale: 1.6;
`;

const StyledIcon = styled.div`
transform: rotate(${props => props.angle});
transition:  all .2s;
`;


const StyledParticles = styled.div`

transform: translate(-20px, -20px);


`;





export default function Plane({ airports, x, y }) {

    const { findAngle } = usePlane();
    let angle = 0;
    if (airports.length > 1) {
        angle = findAngle(airports);
    }

    return (
        <StyledPlane x={x} y={y} >
            <svg width="0" height="0">
                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#3451b9" offset="50.48%" />
                    <stop stopColor="#FAAE19" offset="63.88%" />
                    <stop stopColor="#E41B22" offset="100%" />
                </linearGradient>
            </svg>
            <StyledIcon angle={`${-angle}deg`}>
                <IoAirplane style={{ fill: "url(#blue-gradient", stroke: "white", strokeWidth: "20" }} />

                <StyledParticles>
                    <Particle color={"#304DB3"} size={10} />
                    <Particle color={"#FAAE19"} size={7} />
                    <Particle color={"#E41B22"} size={6} />
                    <Particle color={"#304DB3"} size={8} />
                    <Particle color={"#FAAE19"} size={9} />
                    <Particle color={"#E41B22"} size={10} />
                    <Particle color={"#304DB3"} size={9} />
                    <Particle color={"#FAAE19"} size={8} />
                    <Particle color={"#E41B22"} size={7} />
                    <Particle color={"#304DB3"} size={6} />
                    <Particle color={"#FAAE19"} size={5} />
                    <Particle color={"#E41B22"} size={6} />
                    <Particle color={"#304DB3"} size={8} />
                    <Particle color={"#FAAE19"} size={9} />
                    <Particle color={"#E41B22"} size={10} />
                    <Particle color={"#304DB3"} size={9} />
                    <Particle color={"#FAAE19"} size={8} />
                    <Particle color={"#E41B22"} size={7} />
                    <Particle color={"#304DB3"} size={6} />
                    <Particle color={"#E41B22"} size={5} />
                    <Particle color={"#304DB3"} size={7} />
                    <Particle color={"#FAAE19"} size={8} />
                    <Particle color={"#E41B22"} size={9} />
                </StyledParticles>

            </StyledIcon>





        </ StyledPlane>


    )
}
