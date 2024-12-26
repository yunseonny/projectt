// src/components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card rounded-lg shadow-md p-4">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <p className="text-gray-700">{content}</p>
    </div>

  );
};

export default Card;
