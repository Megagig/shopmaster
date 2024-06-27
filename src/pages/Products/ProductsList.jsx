import axios from "axios";
import { useState, useEffect } from "react";
import { ProductCard } from "./components.js/ProductCard";

export const ProductsList = () => {
  const baseUrl = "http://localhost:3000"
  const [products, updateProducts] = useState([]);

  useEffect((input) => {
    axios.get(`${baseUrl}/products`)
      .then(response => {
        // console.log(response.data);
        updateProducts(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  
  const categoriesChecked = (categoryName = "Category 1") => {
    // filter products by checked categories
    const productsList = [...products];

    Array.from(productsList).forEach(item => item.category === "Category 1"? item: "");
    // console.log(productsList);

    // Solve issue on categories the above code is not filtering.
  
  }

  return (
  <div className="flex w-full box-border">
    <div className="my-6" onClick={() => categoriesChecked("Category 1")}>
      <p className="ml-4">Showing all {products.length} available products.</p>
      <div id="productList" className="flex w-full flex-wrap justify-center">
        {Array.from(products).map(product => 
          <ProductCard 
            name = {product.name}
            price = {product.price}
            description = {product.description}
            undiscounted_price = {product.undiscounted_price}
            src = {product.image}
            id = {product.id}
            key = {product.id}
          />)}
      </div>
    </div>
  </div>);
};
