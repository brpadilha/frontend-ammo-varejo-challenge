import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { ProductListType } from '../components/Product/ProductList';

interface ProductList {
  totalCount: number;
  limit: number;
  products: ProductListType[]
}

interface ProductContextInterface {
  productList: ProductList;
  setProductList: React.Dispatch<React.SetStateAction<ProductList>>;
  nameParams: string;
  setNameParams: React.Dispatch<React.SetStateAction<string>>;
  pagination: number;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
  error?: string;
  loading?: boolean;
}

export const ProductContext = React.createContext<ProductContextInterface>({
  productList: {
    totalCount: 0,
    limit: 0,
    products: []
  },
  setProductList: () => null,
  nameParams: '',
  setNameParams: () => null,
  pagination: 0,
  setPagination: () => null,
  error: '',
  loading: false
});

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [productList, setProductList] = useState<ProductList>({} as ProductList);
  const [nameParams, setNameParams] = useState<string>('');
  const [pagination, setPagination] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      console.log('fetchData')
      try {
        setLoading(true);
        const response = await api.get<ProductList>(
          `products`,
          {
            params: {
              name: nameParams,
              pagination
            }
          }
        );
        setProductList(response.data);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error.code)
      }

    }

    fetchData();

  }, [pagination, nameParams]);

  return (
    <ProductContext.Provider value={{ productList, setProductList, setNameParams, nameParams, setPagination, pagination, error, loading }}>
      {children}
    </ProductContext.Provider>
  );
};