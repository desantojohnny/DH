const fs = require('fs');
let moment = require("moment");

const superHerois = require('./superHerois');
const CineHouse = require('./CineHouse');

let dados = fs.readFileSync(__dirname + "/dados.txt", 'utf8')
let data = moment().format('MM DD YY')

console.log(superHerois);
console.log(CineHouse)
