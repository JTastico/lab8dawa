require('dotenv').config();
const http = require('http');

function requestController(req, res) {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);

    if (req.url === '/' && req.method === 'GET') {
        const html = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Servidor Activo</title>
                <style>
                    body {
                        margin: 0;
                        background: radial-gradient(circle, #1e3c72, #2a5298);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        font-family: sans-serif;
                        color: white;
                    }
                    .scene {
                        width: 200px;
                        height: 200px;
                        perspective: 600px;
                    }
                    .cube {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        transform-style: preserve-3d;
                        animation: rotateCube 10s infinite linear;
                    }
                    .face {
                        position: absolute;
                        width: 200px;
                        height: 200px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 24px;
                        background: rgba(255, 255, 255, 0.1);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                    }
                    .front  { transform: rotateY(  0deg) translateZ(100px); }
                    .back   { transform: rotateY(180deg) translateZ(100px); }
                    .right  { transform: rotateY( 90deg) translateZ(100px); }
                    .left   { transform: rotateY(-90deg) translateZ(100px); }
                    .top    { transform: rotateX( 90deg) translateZ(100px); }
                    .bottom { transform: rotateX(-90deg) translateZ(100px); }

                    @keyframes rotateCube {
                        0% { transform: rotateX(0deg) rotateY(0deg); }
                        100% { transform: rotateX(360deg) rotateY(360deg); }
                    }
                </style>
            </head>
            <body>
                <div class="scene">
                    <div class="cube">
                        <div class="face front">Servidor activo</div>
                        <div class="face back">Bienvenido</div>
                        <div class="face right">Node.js</div>
                        <div class="face left">HTTP</div>
                        <div class="face top">3D</div>
                        <div class="face bottom">Animación</div>
                    </div>
                </div>
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
