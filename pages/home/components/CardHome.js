import styled from "styled-components";

const CardHome = styled.div`
    background-color: #F5DFBB;
    border-radius: 10px;
    width: 85%;
    height: 14%;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px auto;
    box-sizing: border-box;
    ::before{
        content: "";
        background-color: #F2542D;
        width: 3%;
        height: 100%;
        position: absolute;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        left: 0;
    }
`;

export default CardHome