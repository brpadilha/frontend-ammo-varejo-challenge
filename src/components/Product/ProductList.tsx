import { Images, Image, Container, InfoProduct, Price, ProductDescription, ProductTitle, DescriptionContainer, PriceContainer } from "./ProductList.styles";

export type ProductListType = {
  id?: number;
  name: string;
  description: string;
  promotionPrice: number;
  price: number;
  images: {
    id: number;
    url: string;
  }[];
}

export function ProductList({ name, description, promotionPrice, price, images }: ProductListType) {

  return (
    <Container>
      <Images>
        {
          images.map(image => (
            <li key={image.id}>
              <Image
                src={`https://raw.githubusercontent.com/brpadilha/backend-ammo-varejo-challenge/main/src${image.url}`}
              />
            </li>
          ))
        }

      </Images>
      <InfoProduct>
        <DescriptionContainer>
          <ProductTitle>{name}</ProductTitle>
          <ProductDescription>{description}</ProductDescription>
        </DescriptionContainer>
        <PriceContainer>
          <Price isPromotional={!!promotionPrice}>R${price}</Price>
          <span>por</span>
          <Price > R$ {promotionPrice}</Price>
        </PriceContainer>
      </InfoProduct>
    </Container>

  )
}