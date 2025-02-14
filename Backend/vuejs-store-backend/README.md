# Vuejs-Store-Backend

Vuejs-Store-Backend is a headless CMS powered by Strapi, designed to serve as the backend for the Vuejs-Store e-commerce application. It provides APIs for managing products, categories, users and authentication.

## Features

- 📦 **Product Management** - Create, read, update, and delete products.
- 🔐 **Authentication & Authorization** - Secure user authentication with JWT.
- 🚀 **REST APIs** - API options for frontend integration.

## ENV Variables

1. Create a copy of:
   ```
   .env.template
   ```
   and rename it to '.env'
   
2. For testing purpose you can go on with that, otherwise modify this '.env' file with your preferences.

## Installation

Make sure you have [Node.js](https://nodejs.org/)

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run develop
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:1337/admin
   ```
   
5. Create your local admin account

## Build for Production

To create a production-ready build:

```sh
npm run build
npm start
```

## Import mock data

1. Stop the strapi service

2. In the command line, write:
   ```
   npm run strapi import -- -f mock.gz
   ```

3. Start the server again

## Technologies Used

- Strapi (Node.js Headless CMS)
- SQLite (Database)
- JWT Authentication
- REST APIs

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
