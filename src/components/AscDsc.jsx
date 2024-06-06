import React from "react";

const OrderButtons = ({ setIsAscending }) => {
  const handleClickAscending = () => {
    setIsAscending(true);
  };

  const handleClickDescending = () => {
    setIsAscending(false);
  };
  return (
    <div className="order-buttons">
      <button onClick={handleClickAscending}>A-Z</button>
      <button onClick={handleClickDescending}>Z-A</button>
    </div>
  );
};

export default OrderButtons;
