import React from "react";
import "./GameCard.css";

const GameCard = ({
  title,
  genre,
  rating,
  releaseDate,
  price,
  available,
  imageUrl,
}) => {
  return (
    <div className="bg-card">
      <img src={imageUrl} alt={title} className="game-image" />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-description">{genre}</div>
        <div className="card-info">
          <span>{rating}</span>
          <span>Дата выхода: {releaseDate}</span>
          <span>Цена: {price} ₽</span>
        </div>
        <button className="buy-button" disabled={!available}>
          {available ? "Купить" : "Нет в наличии"}
        </button>
      </div>
    </div>
  );
};

export default GameCard;
