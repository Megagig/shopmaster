import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState("description");
    const [product, setProduct] = useState({
      id: 0,
      name: '',
      price: 0,
      category: '',
      description: '',
      image: '',
    });
    const baseUrl = 'https://fakestoreapi.com';

    useEffect(() => {
      // const response = await axios.get()
    })

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                    <p className="text-xl text-gray-700 mb-4">
                        ${product.price}
                    </p>
                    <p className="text-gray-600 mb-4">{product.category}</p>
                    <div className="mb-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="border-b">
                    <nav className="-mb-px flex">
                        <button
                            className={`mr-1 ${
                                activeTab === "description"
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            onClick={() => setActiveTab("description")}
                        >
                            Description
                        </button>
                        <button
                            className={`mr-1 ${
                                activeTab === "information"
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            onClick={() => setActiveTab("information")}
                        >
                            Other Information
                        </button>
                    </nav>
                </div>
                <div className="mt-4">
                    {activeTab === "description" && (
                        <div>
                            <h2 className="text-lg font-semibold mb-2">
                                Product Description
                            </h2>
                            <p>{product.description}</p>
                        </div>
                    )}
                    {activeTab === "information" && (
                        <div>
                            <h2 className="text-lg font-semibold mb-2">
                                Other Information
                            </h2>
                            <ul>
                                <li>Brand: {product.brand}</li>
                                <li>SKU: {product.sku}</li>
                                <li>Weight: {product.weight}</li>
                                <li>Dimensions: {product.dimensions}</li>
                                {/* Add more product information as needed */}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
