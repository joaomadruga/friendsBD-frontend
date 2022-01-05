import styled from "styled-components";

const DivInputsRegistro = styled.div`
    width: 70%;
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        "inputName inputName"
        "inputNickname inputEmail"
        "inputDate inputPassword";
    column-gap: 70px;
    row-gap: 10px;
`;

export default DivInputsRegistro