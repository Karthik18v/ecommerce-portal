import React from "react";
import { Link } from "react-router-dom";
import InvoiceList from "../InvoiceList";
import "./index.css"; // Import Dashboard CSS

const Dashboard = ({ invoices, deleteInvoice }) => {
  return (
    <div className="dashboard">
      <h1>Invoice Dashboard</h1>
      <Link to="/new-invoice" style={{ textDecoration: "none" }}>
        <button className="add-invoice-button">Add New Invoice</button>
      </Link>
      <InvoiceList invoices={invoices} deleteInvoice={deleteInvoice} />
    </div>
  );
};

export default Dashboard;
