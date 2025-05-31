import { createRoot } from "react-dom/client";
import Pizza from "./pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Pepperoni"
        description="pep, cheese, n stuff"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="ham, pinapple, n stuff"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Americano"
        description="french fries, hots dogs, n stuff"
        image={"/public/pizzas/big_meat.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
