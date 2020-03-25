const express = require('express');


const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * GET: buscar uma informação do backend
 * POST: criar "
 * PUT: alterando "
 * DELETE: deletando "
 */

/**
 * tipos de parâmetros
 *
 * Query Params: Parametros nomeados enviados na rota após "?" e servem pra filtros, paginação
 * Routa Params: Parâmetros utilizados para identificar recursos
 * Request Body; Corpo da requisição, utilizado para criar ou alterar recursos
 */
routes.post('/sessions', SessionController.create);

routes.get('/ong', OngController.index);
routes.post('/ong', OngController.create);

routes.get('/incident', IncidentsController.index);
routes.post('/incident', IncidentsController.create);
routes.delete('/incident/:id', IncidentsController.delete)

routes.get('/profile', ProfileController.index);


module.exports = routes;