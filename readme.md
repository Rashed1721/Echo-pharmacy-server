# Medicine E-Commerce Backend

## Overview

The backend of the Medicine E-Commerce Platform is developed using Express.js and Mongoose, with JWT for authentication. It provides a RESTful API for managing users, products, orders, and categories. The backend handles data storage, authentication, and business logic for the platform.

## Technology Stack

- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Email Service:** Nodemailer
- **Password Hashing:** bcrypt
- **Error Handling:** Custom middleware

## Features

1. User Registration with email verification
2. User Login with JWT-based authentication
3. CRUD Operations for Categories, Variants, Products, and Orders
4. Dynamic Category Management
5. Shipping Address Management
6. Secure Authentication with password hashing and JWT
7. Role-based Access Control (admin, user)
8. Error Handling and Validation
9. Integration with frontend for seamless data flow
10. Performance optimization and security best practices

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB instance (local or remote)

### Installation

1. **Clone the repository:**

   ```bash
   git clone github --repo link
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup Environment Variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   NODE_ENV= development | production
   PORT = 4000
   DATABASE_URL = database_url
   BCRYPT_SALT_ROUNDS= 12
   DEFAULT_PASS= default_password
   JWT_ACCESS_SECRET = jwt_access_secret
   JWT_REFRESH_SECRET = jwt_refresh_secret
   EMAIL_USER= email_user
   EMAIL_PASS= email_pass
   JWT_ACCESS_EXPIRES_IN=1h
   JWT_REFRESH_EXPIRES_IN=1d
   ```

4. **Start the Backend Server:**

   ```bash
   npm run start:dev
   ```

   The backend will be available at `http://localhost:4000`.

### Running Tests

To run tests for the backend, use:

```bash
npm test
```

### Deployment

For deployment, you can use platforms like Heroku. Ensure that your environment variables are properly configured in the deployment platform.

### Contributing

Feel free to submit issues or pull requests if you find any bugs or want to contribute to the project.
