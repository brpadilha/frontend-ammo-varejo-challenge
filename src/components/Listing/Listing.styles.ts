import styled from "styled-components";
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE } from "../Header/Header.styles";
import { BOTTOM_HEIGHT } from "../Pagination/Pagination.styles";

export const ContainerHeader = styled.div`
  display: flex;
  height: 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme["gray-300"]};
  align-items: center;
  padding-left: 2rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 100;
`
export const Content = styled.div`
  margin-top: ${HEADER_HEIGHT_MOBILE};
  @media (min-width: 660px) {
    margin-top: ${HEADER_HEIGHT};
  }
`

export const ListProducts = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: ${BOTTOM_HEIGHT};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`