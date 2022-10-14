import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, subtitle,item }) => {
  return (
    <div className="bg-headline flex flex-col p-3 font-semibold rounded min-h-96 min-w-60 max-h-110 max-w-xs justify-between">
      <span className="text-background text-center text-lg">{title}</span>
      <Link to="/store">
        <img
          className="p-5 hover:scale-105 transition-all"
          src={item}
          alt={title}
        />
      </Link>
      <Link to="/store">
        <span className="text-sm text-gray-500 text-left">{subtitle}</span>
      </Link>
    </div>
  );
};

export default Card;
