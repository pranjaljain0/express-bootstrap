# Express.js Bootstrap

This is a bootstrap project for building web applications using Express.js.

## Getting Started

To get started, you will need to have [Node.js](https://nodejs.org/) installed on your system. Clone this repository and install the dependencies by running the following command:

The following packages are included as dependencies in this project:

- `body-parser`: Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property.
- `cors`: Provides middleware to enable CORS (Cross-Origin Resource Sharing).
- `errorhandler`: Development-only error handler middleware for Express.js.
- `express`: Web framework for Node.js.
- `express-lowercase-paths`: Middleware to convert all request paths to lowercase.
- `helmet`: A collection of middleware to help secure Express.js apps by setting various HTTP headers.
- `morgan`: HTTP request logger middleware for Node.js.
- `node-notifier`: A cross-platform desktop notification library.
- `nodemon`: Monitor for any changes in your Node.js application and automatically restart the server.
- `response-time`: Records the response time for requests in HTTP servers.

## Development

To start the development server, run the following command:

`npm run start`

This will start the server using `nodemon` which will automatically restart the server when changes are detected.

## Production

To run the application in production mode, run the following command:

`npm run prod`

This will start the server in production mode.

## License

This project is licensed under the [MIT License](LICENSE).
