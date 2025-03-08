import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./index.css"; // Import CSS for InvoiceDetail

const InvoiceDetail = ({ invoices, updateInvoice, deleteInvoice }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [invoice, setInvoice] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchedInvoice = invoices.find((inv) => String(inv.orderId) === String(id));
    if (!fetchedInvoice) {
      alert("Invoice not found!");
      navigate("/");
    } else {
      setInvoice(fetchedInvoice);
      setItems(fetchedInvoice.items || []);
    }
    setLoading(false);
  }, [id, invoices, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!invoice) {
    return null;
  }

  const handleAddItem = () => {
    const newItem = {
      itemName: "",
      quantity: 0,
      regularPrice: 0,
      dealPrice: 0,
      itemTotal: 0,
      itemWiseTax: 0,
    };
    setItems([...items, newItem]);
  };

  const handleSave = () => {
    const grandTotalWithoutTax = items.reduce(
      (sum, item) => sum + item.itemTotal,
      0
    );
    const grandTotalWithTax = items.reduce(
      (sum, item) => sum + item.itemTotal + item.itemWiseTax,
      0
    );
    const updatedInvoice = {
      ...invoice,
      items,
      grandTotalWithoutTax,
      grandTotalWithTax,
    };
    updateInvoice(updatedInvoice);
    navigate("/");
  };

  const handleDelete = () => {
    deleteInvoice(invoice.orderId);
    navigate("/");
  };

  return (
    <div className="invoice-detail">
      <h2>Invoice Detail</h2>
      <p>Store: {invoice.storeName}</p>
      <p>Order ID: {invoice.orderId}</p>
      <p>Date: {invoice.date}</p>
      <h3>Items:</h3>
      {items.map((item, index) => (
        <div key={index} className="item-input">
          <input
            value={item.itemName}
            onChange={(e) => {
              const newItems = [...items];
              newItems[index].itemName = e.target.value;
              setItems(newItems);
            }}
            placeholder="Item Name"
          />
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => {
              const newItems = [...items];
              newItems[index].quantity = parseFloat(e.target.value);
              newItems[index].itemTotal =
                newItems[index].quantity * newItems[index].dealPrice;
              newItems[index].itemWiseTax = newItems[index].itemTotal * 0.1;
              setItems(newItems);
            }}
            placeholder="Quantity"
          />
          <input
            type="number"
            value={item.regularPrice}
            onChange={(e) => {
              const newItems = [...items];
              newItems[index].regularPrice = parseFloat(e.target.value);
              setItems(newItems);
            }}
            placeholder="Regular Price"
          />
          <input
            type="number"
            value={item.dealPrice}
            onChange={(e) => {
              const newItems = [...items];
              newItems[index].dealPrice = parseFloat(e.target.value);
              newItems[index].itemTotal =
                newItems[index].quantity * newItems[index].dealPrice;
              newItems[index].itemWiseTax = newItems[index].itemTotal * 0.1;
              setItems(newItems);
            }}
            placeholder="Deal Price"
          />
        </div>
      ))}
      <div className="button-group">
        <button onClick={handleAddItem}>Add Item</button>
        <button onClick={handleSave}>Save</button>
        <button className="delete-button" onClick={handleDelete}>
          Delete Invoice
        </button>
      </div>
      <div className="totals">
        <h3>Totals:</h3>
        <p>
          Grand Total Without Tax: ${invoice.grandTotalWithoutTax?.toFixed(2) || "0.00"}
        </p>
        <p>
          Grand Total With Tax: ${invoice.grandTotalWithTax?.toFixed(2) || "0.00"}
        </p>
      </div>
    </div>
  );
};

export default InvoiceDetail;
