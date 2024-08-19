import React from "react";
import "./GameModal.css";

const GameModal = ({ game, onClose }) => {
  if (!game) return null;

  // Вынесем данные из объекта `game` с дефолтными значениями
  const {
    title = "No Title",
    genre = "No Genre",
    rating = "No Rating",
    releaseDate = "No Release Date",
    price = "No Price",
    available = false,
    status = "No Status",
    imageUrl = "",
  } = game;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {imageUrl && <img src={imageUrl} alt={title} className="game-image" />}
        <h2>{title}</h2>
        <div className="game-details">
          <p>
            <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>Rating:</strong> {rating}
          </p>
          <p>
            <strong>Release Date:</strong> {releaseDate}
          </p>
          <p>
            <strong>Price:</strong> {price} ₽
          </p>
          <p>
            <strong>Available:</strong> {available ? "Yes" : "No"}
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
