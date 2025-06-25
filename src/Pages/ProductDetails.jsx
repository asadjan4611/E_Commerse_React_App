import React, { useState, useEffect, useContext } from "react";
import TopHeader from "../components/HeaderButton/TopHeader";
import Footer from "../components/Footer";
import axios from "axios";
import Container from "../components/common/Container";
import Row from "../components/common/Row";
import Button from "../components/common/Button";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { CartContext } from "../ContextAPI";

const ProductDetails = ({ data }) => {
   const { cartItems, handleInc, handleDec } = useContext(CartContext);
  
    const cartItem = cartItems.find(item => item._id === data?._id);


  const {id} = useParams();
  const [product, setProduct] = useState([]); // Single product object
  const [count, setCount] = useState(0); // Quantity count

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data); // Store the fetched product
    } catch (error) {
      console.error("ERROR fetching product:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  const handleAddToCart = () => {
  if (count > 0) {
    // Create a product object with the selected quantity
    const productToAdd = {
      ...product,
      qty: count
    };
    handleInc(productToAdd);
    alert(`${count} ${product.title} added to cart!`);
    console.log(productToAdd);
    console.log("the total cart items is that is added  is given as:",cartItems.length);
    setCount(0); // Reset quantity after adding
  } else {
    alert("Please select at least 1 item");
  }
};
  return (
    <div className="w-full bg-[#0b0f130d]">
      <TopHeader />
      <Container className="my-6">
        <Row className="justify-between">
          {/* Product Image */}
          <Row className="w-[36%] h-[500px] object-cover">
            <img
              className="w-full object-cover h-80vh"
              src={product.image}
              alt={product.title}
            />
          </Row>

          {/* Product Details */}
          <Row className="flex-col w-[47%]">
            <h1 className="text-[30px] text-slate-500 font-semibold">
              {product.category} | {product.title}
            </h1>
            <Row className="gap-[20px] mt-[15px] w-[25%]">
              <p className="text-[14px] font-medium text-black">Rating:</p>
              <p className="text-[14px] text-black">
                {product.rating?.rate || "N/A"} / 5
              </p>
            </Row>
            <Row className="gap-[20px] mt-[8px] w-[15%]">
              <p className="text-[14px] font-medium text-black">Price:</p>
              <p className="text-[14px] text-black">${product.price}</p>
            </Row>
            <Row className="gap-[20px] mt-[15px]">
              <p className="text-[18px] font-medium text-black">Description:</p>
              <p className="text-[18px] text-black">{product.description}</p>
            </Row>

            {/* Quantity Selector */}
            <Row className="mt-[30px] items-center">
              <Button
                title="-"
                className="w-[52px] h-[52px]"
                onClick={() => setCount((prev) => Math.max(0, prev - 1))}
              />
              <p className="w-[60px] text-center text-[16px] font-semibold">
                {count}
              </p>
              <Button
                title="+"
                className="w-[52px] h-[52px]"
                onClick={() => setCount((prev) => prev + 1)}
              />
            </Row>

            {/* Add to Cart */}
            <Button
              title="Add to Cart"
              className="w-[166px] h-[52px] mt-[10px]"
              onClick={handleAddToCart}
            />
          </Row>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetails;
