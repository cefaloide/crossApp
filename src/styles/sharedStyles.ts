import styled, { css } from "styled-components";

export const RepsWrapper = styled.div`
  background: lightblue;
  height: 100vh;
  font-size: 20vh;
  justify-content: center;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const TextInput = styled.input`
  font-size: 2rem;
  width: 100%;
`;

export const ResetTextBtn = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  display: inline-block;
  padding: 10px;
  background: white;
  font-weight: bold;
`;

export const Button = styled.div<{ primary?: boolean }>`
  border: 1px solid black;
  border-radius: 5px;
  display: inline-block;
  padding: 10px;
  background: cornflowerblue;

  ${(props) =>
    props.primary &&
    css`
      background: coral;
    `}
`;
