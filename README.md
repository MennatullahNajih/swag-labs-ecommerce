# Swag Labs E-commerce Automation Testing

## Overview

This project automates a user journey on the e-commerce website SauceDemo. The test covers core functionalities including logging in, adding products to the cart, verifying contents, and completing a purchase using data from an external API.

## Technology Stack

 **Testing Framework:** Playwright
 **Language:** JavaScript

## Prerequisites
Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

1. **Clone the Repository**
   git clone https://github.com/MennatullahNajih/swag-labs-ecommerce.git
   cd swag-labs-ecommerce

2. **Install Dependencies**
   Run the following command to install the required packages:
   npm install
   
3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following variables:
   SAUCE_DEMO_USERNAME=standard_user
   SAUCE_DEMO_PASSWORD=secret_sauce

4. **Run the Tests**
   You can execute the tests using the following command:
   npx playwright test

## Test Steps
The automated tests will perform the following actions:

1. Login to the SauceDemo website using the standard user credentials.

2. Add the product **"Sauce Labs Fleece Jacket"** to the cart.

3. Open the **"Sauce Labs Onesie"** product details page and add it to the cart.

4. Assert the number of products displayed on the cart icon (should be 2).

5. Navigate to the cart page and verify the names and prices of the added products.

6. Proceed to checkout.

7. Assert the order details on the overview page.

8. Complete the purchase by clicking Finish and verifying the "Complete" page.
 
