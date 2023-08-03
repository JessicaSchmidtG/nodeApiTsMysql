// importar o app
import app from './app'
// importar dotenv (.env)
import dotenv from "dotenv";
dotenv.config();
 
const PORT = process.env.PORT;
// Endpoint raiz
app.get('/', (request: any, response: any) => {
    response.send('Ta funcionando')
});
 
app.listen(PORT, () => {console.log(`Running on port ${PORT}`)});