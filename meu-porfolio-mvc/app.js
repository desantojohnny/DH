const express = require('express');
const path = require('path');
const app = express();
/* 
* armazenamos em app a execução do express a fim de ter todos
* os métodos disponíveis em um objeto
*/
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname)
// ************ Sistema de roteamento requer o use() ************
const mainRoutes = require('./routers/main');
app.use('/', mainRoutes);

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');    
});
