import React from "react";

function Cards({ persons }) {
  return (
    <>
      {persons.map((item, index) => (
        <div
          key={index}
          style={{ margin: "20px 20px ", backgroundColor: "gray", width: 500 }}
        >
          <h1>Name: {item.name}</h1>
          <h2>Email: {item.email}</h2>
        </div>
      ))}
    </>
  );
}

export default Cards;
