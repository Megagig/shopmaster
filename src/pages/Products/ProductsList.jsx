/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { FilterBar } from "./components.js/FilterBar";
import { ProductCard } from "./components.js/ProductCard";

export const ProductsList = () => {
    const baseUrl = "https://paschal.pythonanywhere.com/api/v1/";
    // const baseUrl = "https://fakestoreapi.com";
    // const baseUrl = "http://localhost:3000"
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseUrl}/products`)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const categoriesChecked = (categoryName = "Category 1") => {
        // filter products by checked categories
        const productsList = [...products];

        Array.from(productsList).forEach((item) =>
            item.category === "Category 1" ? item : ""
        );
        // console.log(productsList);

        // Solve issue on categories the above code is not filtering.
    };

    return (
        <div className="flex flex-col gap-6 p-6 max-w-[1280px] m-auto">
          <h1 className="text-xl font-bold">Products</h1>
            <div
                id="productList"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {Array.from(products).map((product) => (
                    <ProductCard
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        category={product.category}
                        src={product.image}
                        id={product.id}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
        // <div className="flex w-full box-border">
        //     <FilterBar />
        //     <div
        //         className="my-6"
        //         onClick={() => categoriesChecked("Category 1")}
        //     >
        //         <p className="ml-4">
        //             Showing all {products.length} available products.
        //         </p>
        //         <div
        //             id="productList"
        //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
        //         >
        //             {Array.from(products).map((product) => (
        //                 <ProductCard
        //                     name={product.name}
        //                     price={product.price}
        //                     description={product.description}
        //                     src={product.image}
        //                     id={product.id}
        //                     key={product.id}
        //                 />
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
};
