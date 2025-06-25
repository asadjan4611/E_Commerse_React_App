import React, { useContext, useState } from "react";
import Row from "./Row";
import Button from "./Button";
import { CartContext } from "../../ContextAPI";


const QtyContainer = ({ onValueChange, data }) => {
  const [count, setCount] = useState(0);
  const { cartItems, handleInc, handleDec } = useContext(CartContext);

  const cartItem = cartItems.find(item => item._id === data._id);

  const increment = () => {
    handleInc(data._id);
    const newCount = count + 1;
    setCount(newCount);
    onValueChange(newCount);
    debugger;
  };

  const decrement = () => {
    handleDec(data._id);
    const newCount = Math.max(0, count - 1);
    setCount(newCount);
    onValueChange(newCount);
  };

  return (
    <Row className="mt-[30px] items-center">
      {/*<Button
        title="-"
        className="w-[52px] h-[52px]"
        onClick={decrement}
      />*/}
      <p className="w-[60px] text-center text-[16px] font-semibold">
        {cartItem ? cartItem.qty : 0}
      </p>
     {/*} <Button
        title="+"
        className="w-[52px] h-[52px]"
        onClick={increment}
      />*/}
    </Row>
  );
};

export default QtyContainer;
