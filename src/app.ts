//Importar o pacote express para criar o servidor
const express = require("express");

const app = express();
app.use(express.json());

import router from './routes/userRouter';
import userRouter from './routes/userRouter';

app.use('/api/', userRouter);
// para que estas informações sejam vistas em qualquer outro aquivo da nossa aplicação
export default app;
