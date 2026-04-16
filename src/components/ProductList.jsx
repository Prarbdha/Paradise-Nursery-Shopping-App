import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents" },
  { id: 2, name: "Cactus", price: 8, category: "Succulents" },
  { id: 3, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 4, name: "Money Plant", price: 12, category: "Indoor" },
  { id: 5, name: "Rose", price: 20, category: "Flowering" },
  { id: 6, name: "Lily", price: 18, category: "Flowering" }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plants</h2>
      {plants.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={() => dispatch(addItem(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;