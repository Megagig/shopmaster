import { ProductCard } from "../../Products/components.js/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

export const FeaturedProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, updateProducts] = useState([]);
  const [featuredProducts, updateFeaturedProducts] = useState([]);
  const baseUrl = "http://localhost:3000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/products`);
        updateProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && products) {
      getFeaturedProducts();
    }
  }, [loading, products]);


  const getFeaturedProducts = () => {
    // Get random products as featured products
    const featuredProductsList = [];

    let count = 0;
    while(count < 3) {
      const randomIndex = Math.floor(Math.random() * products.length);
      const randomProduct = products[randomIndex];
      featuredProductsList.push(randomProduct);

      count += 1; 
    }

    updateFeaturedProducts(featuredProductsList);
  }
 
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured Products
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {loading? <div>Loading...</div> : Array.from(featuredProducts).map(product => 
          <ProductCard 
            name = {product.name}
            price = {product.price}
            description = {product.description}
            undiscounted_price = {product.undiscounted_price}
            src = {product.image}
            id = {product.id}
            key = {product.id}
          />
        )}
      </div>
    </section>
  );
};
