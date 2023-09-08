import React from 'react';
import '../styles/Card.css';

function Card({ title, content, imageUrl }) {
  return (
    <div className="Card">
      {imageUrl && <img src={imageUrl} alt={title} className="CardImage" />}
      <h2 className="CardTitle">{title}</h2>
      <p className="CardContent">{content}</p>
    </div>
  );
}

export default Card;
