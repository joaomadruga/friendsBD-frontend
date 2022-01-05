import styled from "styled-components";

const Body = styled.div`
  background-color: ${props => props.bgColor};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Body