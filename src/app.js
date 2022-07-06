import express from "express";

import book from './routes/book-router.js'


const app = express();

app.use(book)



export default app;