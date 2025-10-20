import React from "react";

const ChildComponent = ({ user, products }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <h3>Child Component (Props Received)</h3>
      <p> User: {user.name}, Age: {user.age}</p>
      <p> Products:</p>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
