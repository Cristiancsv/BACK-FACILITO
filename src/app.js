import express from "express";

import book from './routes/book-router.js'


const app = express();

//permite que el servidor entienda cosas
app.use(express.json());

 

app.use(book)

export default app;