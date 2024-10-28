# Inventory Management Web App

A simple inventory management web application where users can view products, and admins have additional functionality to manage product details. This app provides two views – an **Admin view** and a **User view** – which can be toggled using the buttons in the navigation bar.

**The code is deployed on** : https://lucidity-inventory-management-system.netlify.app/
**Video explaining the web app features: ** https://www.loom.com/share/c145a17f9f7848f3b1797b5ceeae42be?sid=4553458b-0b82-4d54-bd1c-89c17e9e53e6

## Features
 - ### General
  - View a list of all available products in the inventory.
  - Toggle between Admin and User views using a switch button in the navigation bar.
 - ### Admin View
 - In the **Admin view**, you can:
 - **Edit Product:** Modify product details such as price and quantity.
 - **Delete Product:** Remove products from the inventory.
 - **Disable Product:** Temporarily disable products, hiding them from the user view.
  - ### User View
  - In the User view, you can:
  - **View Products:** Access the list of products in a read-only format.
  - All action buttons (edit, delete, disable) are disabled in this view.

### How to Use
  - **Admin and User Views:** Switch between Admin and User views by toggling the switch button in the navigation bar.
  - **Inventory Actions (Admin only):** Edit, delete, and disable buttons are available for managing products when in Admin view.
  - **User Restrictions:** Users can only view product information. All action buttons will be disabled in User view.
  
### Tech Stack
  - **Frontend:** React, CSS
  - **Data Store:** Local Storage, React Context API for data flow

### Installation
- Clone the project
```bash
  git clone https://github.com/ruchivora/inventory-management.git
```
- Install dependencies:
```bash
  npm install
```
- Start the development server:
```bash
  npm run dev
```

