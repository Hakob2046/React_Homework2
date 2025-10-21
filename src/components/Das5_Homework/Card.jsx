import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 my-4 w-80 text-center">
      {children}
    </div>
  );
};

export default Card;
