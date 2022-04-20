var express = require('express');
const mainController = require('../controllers/mainController');
/**
 * Para poder modularizar e utilizar o sistema de roteamento
 * conm express
 */
var router = express.Router(); 


router.get('/', mainController.index); /* GET - home page  */
router.get('/about', mainController.about); /* GET - about page  */

module.exports = router; //Exportamos todo o conteúdo da rota para torná-la visível
