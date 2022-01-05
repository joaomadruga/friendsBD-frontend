import styled from "styled-components";

const Title = styled.h1`
    font-size: 2rem;
    color: ${props => props.Color || 'white'};;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    font-style: normal;
    line-height: 49px;
    margin: 0;
    margin-left: 5px;
`;

export default Title