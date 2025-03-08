import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import UUID
import "./index.css"; // Import CSS for NewInvoice

const NewInvoice = ({ addInvoice }) => {
  const navigate = useNavigate();
  const [storeName, setStoreName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      storeName,
      orderId: uuidv4(), // Generate unique order ID
      date,
      items: [],
      grandTotalWithoutTax: 0,
      grandTotalWithTax: 0,
    };
    addInvoice(newInvoice);
    navigate("/");
  };

  return (
    <div className="new-invoice">
      <h2>Create New Invoice</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Store Name"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Create Invoice</button>
      </form>
    </div>
  );
};

export default NewInvoice;
