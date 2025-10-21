import React from "react";

const Message = ({ text, color }) => {
  const colorMap = {
    blue: "text-blue-600",
    red: "text-red-600",
    green: "text-green-600",
  };
   return <p className={`text-xl font-semibold ${colorMap[color]}`}>{text}</p>;
};
export default Message;