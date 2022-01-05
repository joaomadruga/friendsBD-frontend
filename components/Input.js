import styled from "styled-components";

const Input = styled.input`
  background-color: #F2542D;
  width: ${props => props.InputWidth || '25rem'};
  height: 4rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  border: none;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 33px;
  padding-left: ${props => props.paddingLeft || '45px'};
  color: #C8C8C8;
  ::placeholder{
      color: #C8C8C8;
  }
  :focus{
    outline: none;
    color: white;
  }
  ::-webkit-calendar-picker-indicator {
    display: none;
  }

  
`;

export default Input