import styled from "styled-components";

export const HEADER_HEIGHT = "4rem";
export const HEADER_HEIGHT_MOBILE = "5.5rem";

export const Title = styled.h1`
  font-size: 28px;
  color: ${({ theme }) => theme["gray-900"]};
`;

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  @media (min-width: 660px) {
    flex-direction: row;
    height: ${HEADER_HEIGHT};
  }
  justify-content: space-between;
  position: fixed;
  top: 0;
  height: ${HEADER_HEIGHT_MOBILE};
  background-color: ${({ theme }) => theme["gray-100"]};
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme["gray-300"]};
`;

export const InputBox = styled.input`
  width: 20rem;
  height: 40px;
  border: 1px solid ${({ theme }) => theme["gray-500"]};
  border-radius: 5px;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

`