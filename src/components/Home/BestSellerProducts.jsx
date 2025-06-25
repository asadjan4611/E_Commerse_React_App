import React, { useState, useEffect } from "react";
import Container from "../common/Container";
import Row from "../common/Row";
import ProductCard from "../common/ProductCard";
import axios from "axios";

const BestSellerProducts = () => {
  const [products, setProducts] = useState([10]); // All products
  const [selectedCategory, setSelectedCategory] = useState(null); // Selected category

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=10"
      );
      setProducts(response.data); // Store products
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selected category
  };

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === null
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <Container>
      <h1 className="w-full text-center text-[30px] text-[#1e2832] font-semibold mt-[40px] mb-[40px] uppercase">
        Best Seller Products
      </h1>

      <Row className="items-center">
        {/* "All Products" Button */}
        <p
          className="text-[16px] mr-[40px] cursor-pointer text-black font-bold hover:text-[#757575]"
          onClick={() => handleCategoryClick(null)}
        >
          All Products
        </p>
        {/* Categories */}
        {[...new Set(products.map((item) => item.category))].map(
          (category, index) => (
            <p
              key={index}
              className="text-[16px] mr-[40px] cursor-pointer text-[#00000080] hover:text-[#757575]"
              onClick={() => handleCategoryClick(category)} // Filter by category
            >
              {category}
            </p>
          )
        )}
      </Row>

      {/* Product Grid */}
      <Row className="flex-wrap gap-[1%] mt-[40px]">
        {filteredProducts.map((item) => (
          <div className="w-[24%] mb-[20px]" key={item.id}>
            <ProductCard data={item} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default BestSellerProducts;
