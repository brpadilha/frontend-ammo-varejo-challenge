import { useContext } from "react"
import { Container, ContainerHeader, ContainerLoading, Content, ListProducts, Title } from "./Listing.styles"
import { ProductList } from "../Product/ProductList"
import { ProductContext } from '../../context/ProcutContext';
import { Spin } from "antd";


export const ErrorMessage: {
  [key: string]: string
} = {
  ERR_NETWORK: 'Poxa não conseguimos se conectar com o servidor 😞',
}
export function Listing() {
  const { productList, error, loading } = useContext(ProductContext)
  const products = productList.products
  return (
    <Content>
      <ContainerHeader>
        <Title>Lençol avulso</Title>
      </ContainerHeader>
      {loading ?

        <ContainerLoading>
          <Spin />
        </ContainerLoading> :

        <Container>

          {error &&
            <h1>{ErrorMessage[error]}</h1>
          }
          {
            products?.length === 0 && !loading ? <h1>Poxa não encontramos nenhum produto 😞</h1> :
              <>
                <ListProducts>
                  {products?.map(product => (
                    <ProductList
                      key={product.id}
                      name={product.name}
                      description={product.description}
                      promotionPrice={product.promotionPrice}
                      price={product.price}
                      images={product.images}
                    />
                  )
                  )}
                </ListProducts>
              </>
          }
        </Container>
      }
    </Content>

  )
}
