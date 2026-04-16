import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";

function CartItem() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button>Checkout (Coming Soon)</button>
    </div>
  );
}

export default CartItem;