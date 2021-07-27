import { useState, useEffect } from "react";

// function name always start with use otherwise here it will give an error
export const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(url);
      const products = await response.json();
      setProducts(products);
      setLoading(false);
    } catch (error) {
      setProducts([]);
      setLoading(true);
    }
  };
  useEffect(() => {
    getProducts();
  }, [url]);
  return {
    loading,
    products
  };
};
