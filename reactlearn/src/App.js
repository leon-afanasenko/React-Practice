import React from "react";
import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import OrderList from "./OrderList";
const App = () => {
  const items = ["Молоко", "Хлеб", "Яйца"];
  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 456, status: "обработан" },
    { orderId: 789, status: "доставлен" },
  ];

  return (
    <div className="App">
      <Greeting name="Иван" />
      <ShoppingList items={items} />
      <OrderList orders={orders} />
    </div>
  );
};

export default App;
