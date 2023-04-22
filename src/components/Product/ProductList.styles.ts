import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  height: fit-content;
  border: 2px solid ${({ theme }) => theme["gray-300"]};
  border-radius: 2px;
  margin: 0 4rem;
  padding: 0.5rem;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    justify-items: center;
    margin: 0;
  }
`

export const Images = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 660px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  list-style: none;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`

export const InfoProduct = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
`
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`
export const ProductTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`

export const ProductDescription = styled.p`
  font-size: 1rem;
  max-lines: 1;
  color: ${({ theme }) => theme["gray-500"]};
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  max-height: fit-content;
`

export const Price  = styled.span<{
  isPromotional?: boolean;
}>`
  display: flex;
  flex-direction: row;
  text-decoration: ${({ isPromotional }) => isPromotional ? "line-through" : "none"};
  color: ${({ isPromotional, theme }) => isPromotional ? theme["gray-500"] : theme["gray-900"]};
  font-weight: ${({ isPromotional }) => isPromotional ? 200 : 800};;
`

