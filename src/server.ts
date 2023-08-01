// importar dotenv (.env)
import dotenv from "dotenv";
dotenv.config();
 
// importa o pacote express
const express = require("express"); 

// app express
const app = express(); 

const PORT = process.env.PORT;
// Endpoint raiz
/* app.get('/', (request: any, response: any) => {
    response.send('Ta funcionando)
});
*/ 
app.listen(PORT, () => {console.log(`Running on port 3000`)});