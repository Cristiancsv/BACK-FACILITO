import app from './app.js';
import {sequelize} from './db/db.js'

import'./models/Book.js'
import'./models/Gender.js'

async function main(){
try {
await sequelize.sync({force: true})
app.listen(4000)
console.log('csv online on port',4000)}
catch(error){
	console.error('fail',error)}
}

main();