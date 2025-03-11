# Invoice Generation Portal

The **Invoice Generation Portal** is a web application built with **React** that allows users to create, view, edit, and delete invoices. It includes features like calculating item totals, taxes, and grand totals. The application is designed with a **modern and colorful UI** for an enhanced user experience.

---

## Features

1. **Dashboard**:
   - View a list of all invoices.
   - Add a new invoice.

2. **Invoice Detail**:
   - View details of a specific invoice.
   - Edit invoice items (add, update, or delete items).
   - Calculate item totals, taxes, and grand totals.

3. **New Invoice**:
   - Create a new invoice by entering store name, order ID, and date.

4. **Colorful UI**:
   - Each route has a unique color theme:
     - **Dashboard**: Light blue theme.
     - **Invoice Detail**: Purple theme.
     - **New Invoice**: Green theme.

5. **Responsive Design**:
   - The application is fully responsive and works on all screen sizes.

---

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For routing between different pages (Dashboard, Invoice Detail, New Invoice).
- **CSS**: For styling the components with a colorful and modern design.
- **JavaScript**: For implementing logic and calculations.

---

## Installation and Setup

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Karthik18v/ecommerce-portal.git
cd ecommerce-portal
```

### 2. Install Dependencies

Install the required dependencies using `npm` or `yarn`:

```bash
npm install
# or
yarn install
```

### 3. Run the Application

Start the development server:

```bash
npm start
# or
yarn start
```

The application will be running at `http://localhost:3000`.

---

## Project Structure

```
invoice-generation-portal/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard
│   │   ├── InvoiceDetail
│   │   ├── InvoiceList
│   │   ├── NewInvoice
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── Dashboard.css
│   ├── InvoiceDetail.css
│   ├── InvoiceList.css
│   ├── NewInvoice.css
├── package.json
├── README.md
```

---

## Usage

### 1. Dashboard
- Displays a list of all invoices.
- Click the **Add New Invoice** button to create a new invoice.

### 2. New Invoice
- Enter the store name, order ID, and date.
- Click **Create Invoice** to save the invoice.

### 3. Invoice Detail
- View details of a specific invoice.
- Add, edit, or delete items.
- The system automatically calculates:
  - Item totals.
  - Item-wise tax (10% of the item total).
  - Grand total without tax.
  - Grand total with tax.

---


## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **React**: For providing a powerful library for building user interfaces.
- **React Router**: For enabling seamless navigation between pages.
- **CSS**: For making the application visually appealing.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: bittukarthik77@gmail.com
- **GitHub**: [Karthik18v](https://github.com/Karthik18v)

---

Enjoy using the **Invoice Generation Portal**! 🚀

