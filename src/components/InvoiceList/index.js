import React from "react";
import { Link } from "react-router-dom";


const InvoiceList = ({ invoices, deleteInvoice }) => {
  return (
    <div className="invoice-list">
      {invoices.map((invoice) => (
        <div key={invoice.orderId} className="invoice-card">
          <Link
            to={`/invoice/${invoice.orderId}`}
            style={{ textDecoration: "none" }}
          >
            <h3>
              {invoice.storeName} - Order ID: {invoice.orderId}
            </h3>
            <p>Date: {invoice.date}</p>
          </Link>
          <button onClick={() => deleteInvoice(invoice.orderId)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default InvoiceList;
