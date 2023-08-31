/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";


function AllProducts() {

  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products when the component mounts
  useEffect(() => {
    fetchUser();
    fetchProducts();
  }, [token]);

  const fetchProducts = async () => {
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

 // Function for matching text in searh bar
 const productMatches = (product, text) => {
    return (
      product.title.toLowerCase().includes(text) ||
      product.description.toLowerCase().includes(text)
    );
  };
  const filteredProducts = products.filter((product) =>
    productMatches(product, searchTerm.toLowerCase())
  );
  const productsToDisplay = searchTerm.length ? filteredProducts : products;

  return 
    
  
}

export default AllProducts;

