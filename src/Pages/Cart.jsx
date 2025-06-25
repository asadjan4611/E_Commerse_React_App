import React, { useContext } from 'react';
import Layout from '../components/common/Layout';
import Row from '../components/common/Row';
import Container from '../components/common/Container';
import CardItem from '../components/CartItem/CartItem';
import { CartContext } from '../ContextAPI'; // Ensure this is the correct path

const Cart = () => {
  const { cartItems } = useContext(CartContext); // Using context to get cart items

  // Debugging: Log cart items to verify data
  console.log('Cart Items:', cartItems);

  return (
    <Layout>
      <Container className="my-[40px]">
        <Row className="mb-[30px] justify-center">
          <h6 className="text-[24px] text-slate-700 font-semibold">
            Cart Details
          </h6>
        </Row>

        {/* Cart Table Header */}
        <Row className="flex-col mb-[30px]">
          <Row className="h-[40px] bg-gray-400 w-full px-[20px] items-center">
            <h6 className="text-white text-[18px] font-medium w-[20%]">Image</h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">Title</h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">Price</h6>
            <h6 className="text-white text-[18px] font-medium w-[20%] text-center">
              Qty
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%] text-center">
              Total
            </h6>
          </Row>

          {/* Cart Items */}
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <CardItem
                data={item}
                key={item._id || index} // Use index as fallback for key
              />
            ))
          ) : (
            <Row className="mt-[20px] justify-center">
              <p className="text-[16px] text-slate-500">Your cart is empty!</p>
            </Row>
          )}
        </Row>
      </Container>
    </Layout>
  );
};

export default Cart;
