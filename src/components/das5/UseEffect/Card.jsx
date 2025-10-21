import React from "react";

function Card({ children, name }) {
  return (
    <div>
      <h2>{name}</h2>
      <div className="card">{children}</div>;
    </div>
  );
};
export default Card;
