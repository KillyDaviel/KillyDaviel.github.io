require('dotenv').config();

const express = require('express');
const app = express(); 

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

console.log("This is a test")