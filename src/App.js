import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import InvoiceDetail from "./components/InvoiceDetail";
import NewInvoice from "./components/NewInvoice";
import "./App.css"; // Import global styles

const App = () => {
  const [invoices, setInvoices] = useState([
    {
      id: "1",
      storeName: "Ram Store",
      orderId: "12345",
      date: "2024-03-07",
      items: [
        {
          itemName: "Product A",
          quantity: 2,
          regularPrice: 50.0,
          dealPrice: 45.0,
          itemTotal: 90.0,
          itemWiseTax: 9.0,
        },
      ],
    },
  ]);

  const addInvoice = (newInvoice) => {
    setInvoices([...invoices, newInvoice]);
  };

  const updateInvoice = (updatedInvoice) => {
    setInvoices(
      invoices.map((invoice) =>
        invoice.id === updatedInvoice.id ? updatedInvoice : invoice
      )
    );
  };

  const deleteInvoice = (invoiceId) => {
    console.log(invoices);
    const filteredInvoices = invoices.filter(
      (invoice) => invoice.id !== invoiceId
    );

    console.log(filteredInvoices);

    setInvoices(invoices.filter((invoice) => invoice.orderId !== invoiceId));
  };

  return (
    <Router>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          Invoice Dashboard
        </Link>
      </nav>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard invoices={invoices} deleteInvoice={deleteInvoice} />
            }
          />
          <Route
            path="/invoice/:id"
            element={
              <InvoiceDetail
                invoices={invoices}
                updateInvoice={updateInvoice}
                deleteInvoice={deleteInvoice}
              />
            }
          />
          <Route
            path="/new-invoice"
            element={<NewInvoice addInvoice={addInvoice} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
