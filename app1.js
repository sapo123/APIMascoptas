require('dotenv').config() //Importar paquete dotenv. Para trabajar variable de entorno
const Server = require('./models/server1.js')

const server = new Server() //Instanciar el objeto server

server.listen() //Para que verifique si el seridor local funciona y reciba peticiones