# Invoice Generator

This project is an **Invoice Generator** built with React and Vite. It allows you to input various details such as shipping address, billing address, client name, address, and a list of items with their prices, quantities, and discounts. The application generates a PDF invoice based on the provided information.

![Invoice Generator Overview](https://res.cloudinary.com/dxt2i61hy/image/upload/v1725893971/Screenshot_2024-09-09_201047_vufebv.png)

## Input Fields

- **Shipping Address Input**: Enter the shipping address details.
- **Billing Address Input**: Provide the billing address information.
- **Client Details**: Include the client name and address.
- **Item List Management**: Add items with specific prices, quantities, and discounts.
- **Invoice Generation**: Automatically generate a PDF invoice based on the provided inputs.
- **Print Functionality**: Easily print the generated invoice.
- **Other**: Invoice number, order date, GST number, etc...

## Screenshots

### Final Invoice Preview

![Final Invoice](https://res.cloudinary.com/dxt2i61hy/image/upload/v1725893971/Screenshot_2024-09-09_201400_x9gbci.png)

### Input Fields

- **Address Input**:  
  ![Shipping Address Input](https://res.cloudinary.com/dxt2i61hy/image/upload/v1725894291/Screenshot_2024-09-09_203433_uow0mr.png)

- **Client Details**:  
  ![Client Details Input](https://res.cloudinary.com/dxt2i61hy/image/upload/v1725894362/Screenshot_2024-09-09_203545_lptc4s.png)

- **Item List**:  
  ![Item List Input](https://res.cloudinary.com/dxt2i61hy/image/upload/v1725893970/Screenshot_2024-09-09_201334_mewrmd.png)

- **Empty Invoice**:
  ![Empty Invoice Input](https://res.cloudinary.com/dxt2i61hy/image/upload/v1725893970/Screenshot_2024-09-09_201101_gvqscr.png)


### Note (Tax Calculation Logic):
When the client and shipping address is different both CGST and SGST are calculated at each 9%,
![Note Input](https://res.cloudinary.com/dxt2i61hy/image/upload/v1725900018/Screenshot_2024-09-09_204938_dhaxlz.png)

When client and shipping adress are same then single IGST is calculated at 18%;
![Input](https://res.cloudinary.com/dxt2i61hy/image/upload/v1725899893/Screenshot_2024-09-09_220632_dgq7ga.png)


## Technologies Used

- **React**: For building the user interface.
- **Vite**: As the build tool and development server.
- **react-to-print**: For handling the print functionality.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SanjeevThalod/Invoice-Generation.git
2. **Navigate to Directory:**
    ```bash
    cd frontend
3. **Install Dependencies:**
    ```
    npm install
4. **Running the project:**
    ```bash
    npm run dev
5. **The project uses PORT:5173 by default**
    ```bash
    localhost:5173
