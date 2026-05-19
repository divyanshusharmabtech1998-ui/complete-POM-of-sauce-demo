🚀 Playwright POM SauceDemo Automation Framework

A simple Playwright Automation Framework using Page Object Model (POM) for the SauceDemo website.

📌 Project Overview

This project automates the following flow on the SauceDemo website:

Login functionality
Add product to cart
Go to cart
Checkout process
Finish order

Website Used:
SauceDemo

🛠️ Tech Stack
JavaScript
Playwright
Node.js
Page Object Model (POM)
📂 Project Structure
testd/
│
├── pages/
│   ├── loginpage.js
│   ├── productpage.js
│   ├── checkoutpage.js
│   └── finalpage.js
│
├── tests/
│   └── saucetest.spec.js
│
├── utils/
│   ├── credentials.js
│   └── testdata.js
│
├── .env
├── package.json
├── playwright.config.js
└── README.md
⚙️ Installation
1️⃣ Clone Repository
git clone <your-github-repo-link>
2️⃣ Open Project
cd testd
3️⃣ Install Dependencies
npm install
4️⃣ Install Playwright Browsers
npx playwright install
▶️ Run Tests
Run All Tests
npx playwright test
Run Specific Test
npx playwright test tests/saucetest.spec.js --headed
🧩 Framework Features

✅ Page Object Model Design Pattern
✅ Reusable Page Classes
✅ Separate Test Data Files
✅ Environment Variable Support
✅ Clean Folder Structure
✅ Easy Maintenance

📄 Pages Included
🔐 Login Page

Handles:

Username
Password
Login button
🛒 Product Page

Handles:

Add to cart
Go to cart
💳 Checkout Page

Handles:

Checkout process
User information
✅ Final Page

Handles:

Finish order validation
📦 Test Flow
Open SauceDemo
↓
Login with valid credentials
↓
Validate Inventory Page
↓
Add Product to Cart
↓
Go to Cart
↓
Checkout Product
↓
Complete Order
🔑 Credentials Example
module.exports = {
    username: "standard_user",
    password: "secret_sauce"
}
📊 Assertions Used
await expect(page).toHaveURL(/inventory/)

Used to validate successful login.

🧪 Example Test Command
npx playwright test tests/saucetest.spec.js --headed
📸 HTML Report

To open Playwright report:

npx playwright show-report
👨‍💻 Author

Divyanshu Sharma
QA Automation Engineer

⭐ Future Enhancements
Jenkins CI/CD Integration
Docker Support
API Testing Integration
Allure Reporting
Cross Browser Testing
I prefer this response
