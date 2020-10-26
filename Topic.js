import React from 'react';
import styled from 'styled-components';

const Topic = (props) => {
    const {
        profession,
        description
    }=props
    return (
        <PersonalInfo>
            <Title>{profession}</Title>
            <Description>{description}</Description>
        </PersonalInfo>
    );
}

const Title = styled.h1`
    font-family: Calibri;
    font-size: 32px;
    color:purple;
`
const Description = styled.p`
    font-family: Calibri;
    font-size: 18px;
    text-align:center;
`;

const PersonalInfo = styled.div`
    display:flex;
    flex-direction:column;
    max-width: 50%;
`

export { Topic }