import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const onClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-4 m-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto  ">
        <button
          className="bg-black px-6 py-2 text-white rounded"
          onClick={onClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1 className="mt-5">Cart empty, Please add something!</h1>
        )}
        <ItemList itemCards={cartItems} />
      </div>
    </div>
  );
}

export default Cart;
