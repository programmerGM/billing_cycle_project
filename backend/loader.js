// Não esquecer de iniciar o mongo, pois se não estiver iniciado ocorrerá erro ao iniciar o servidor.
// No terminal iniciar o servidor do banco com "mongod"

const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)