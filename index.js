require('dotenv').config();
const http = require('http');

function requestController(req, res) {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);

    if (req.url === '/' && req.method === 'GET') {
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Servidor activo</title>
            </head>
            <body>
                <h1>Servidor activo</h1>
            </body>
            </html>
        `;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
}

const server = http.createServer(requestController);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
