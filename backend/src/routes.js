const express = require('express');
// Importação de controlers. Tudo o que eles fazem tá documentado em cada um deles. Eu espero.
const OngController = require('./controllers/OngController');
const IncidentsControler = require('./controllers/IncidentController');
const ProfileControler = require('./controllers/ProfileController');
const SessionControler = require('./controllers/SessionController');

// Inicializando a instância de Router em uma variável pra gente poder acessar todas as funções e métodos.
const routes = express.Router();

// Configuração das rotas REST
// É bom prestar atenação no segundo argumento de cada um desses elementos pra ver quais as funções que eles tão chamando com a rota.
routes.post('/sessions', SessionControler.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileControler.index);

routes.get('/incidents', IncidentsControler.index);
routes.post('/incidents', IncidentsControler.create);
routes.delete('/incidents/:id', IncidentsControler.delete);

// Exportando a porra toda que vai ser importada lá no index.js
module.exports = routes