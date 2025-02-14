# Vuejs-Store-Backend

Vuejs-Store-Backend is a headless CMS powered by Strapi, designed to serve as the backend for the Vuejs-Store e-commerce application. It provides APIs for managing products, categories, users and authentication.

## Features

- 📦 **Product Management** - Create, read, update, and delete products.
- 🔐 **Authentication & Authorization** - Secure user authentication with JWT.
- 🚀 **REST APIs** - API options for frontend integration.

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

## Build for Production

To create a production-ready build:

```sh
npm run build
npm start
```

## Import mock data

After running the server and login with your local strapi user account, in the sidebar menu go to 'import/export'.

2. Click in 'import'

3. Find the 'mock.json' file and upload it

## Technologies Used

- Strapi (Node.js Headless CMS)
- SQLite (Database)
- JWT Authentication
- REST APIs

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
