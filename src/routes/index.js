const { Router } = require('express');
const { getBooks } = require('../controller/book-controller');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/books', (getBooks))

module.exports = router;
