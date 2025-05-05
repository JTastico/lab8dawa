require('dotenv').config();
const http = require('http');

function requestController(){
    console.log('Bienvenido a mi servidor');
}

const server= http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function(){
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})