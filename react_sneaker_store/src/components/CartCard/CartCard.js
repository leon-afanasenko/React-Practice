import React, { useEffect, useState } from "react";
import styles from "./CartCard.module.css";

const CartCard = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // Количество видимых товаров

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://66f3c83c77b5e8897096ccf3.mockapi.io/productData"
      );
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Увеличиваем количество видимых товаров на 3
  };

  return (
    <div className={styles.cartCardContainer}>
      <h2 className={styles.header}>Товары</h2>
      <div className={styles.cardWrapper}>
        {products.slice(0, visibleCount).map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
            <h3 className={styles.title}>{product.name}</h3>
            <p className={styles.price}>{product.price} руб.</p>
          </div>
        ))}
      </div>
      {visibleCount < products.length && ( // Проверяем, есть ли еще товары для показа
        <div className={styles.buttonWrapper}>
          <button onClick={handleShowMore}>Показать еще</button>
        </div>
      )}
    </div>
  );
};

export default CartCard;
