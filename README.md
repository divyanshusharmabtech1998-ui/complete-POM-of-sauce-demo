# 🚀 Playwright POM SauceDemo Automation Framework

A simple **Playwright Automation Framework** using **Page Object Model (POM)** for the SauceDemo website.

## 📌 Project Overview

This project automates the following flow on the SauceDemo website:

- Login functionality
- Add product to cart
- Go to cart
- Checkout process
- Finish order

### Website Used:
https://www.saucedemo.com/

---

## 🛠️ Tech Stack

- JavaScript
- Playwright
- Node.js
- Page Object Model (POM)
- Git & GitHub

---

## 📂 Project Structure

```bash
testd/
│── pages/
│   ├── loginpage.js
│   ├── productpage.js
│   ├── checkoutpage.js
│   ├── finalpage.js
│
│── tests/
│   ├── saucetest.spec.js
│
│── utils/
│   ├── credentials.js
│   ├── testdata.js
│
│── .env
│── .gitignore
│── playwright.config.js
│── package.json
│── README.md
```

---

## ✅ Framework Features

- Page Object Model Design Pattern
- Reusable Page Classes
- Separate Test Data Files
- Environment Variable Support
- Clean Folder Structure
- Easy Maintenance

---

## 📄 Pages Included

### 🔐 Login Page
- Navigate to SauceDemo website
- Enter username
- Enter password
- Click login button

### 🛒 Product Page
- Add product to cart
- Navigate to cart

### 📦 Checkout Page
- Enter First Name
- Enter Last Name
- Enter Zip Code
- Continue checkout

### 🎯 Final Page
- Finish Order
- Validate successful order placement

---

## 📁 Test Data Management

### credentials.js

```javascript
module.exports = {
    username: "standard_user",
    password: "secret_sauce"
}
```

### testdata.js

```javascript
module.exports = {
    firstname: "Divyanshu",
    lastname: "Sharma",
    zipcode: "560037"
}
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone <your-github-repository-url>
```

### 2. Open Project

```bash
cd testd
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Run Tests

### Run All Tests

```bash
npx playwright test
```

### Run Specific Test

```bash
npx playwright test tests/saucetest.spec.js --headed
```

---

## 📊 Generate Report

```bash
npx playwright show-report
```

---

## 👨‍💻 Author

**Divyanshu Sharma**  
QA Automation Engineer  
Playwright | API Testing | Automation Testing
