import app from './app.js';
import {sequelize} from './db/db.js'

async function main(){
try {
await sequelize.authenticate();
console.log('connection successfully')
app.listen(4000)
console.log('csv online on port',4000)}
catch(error){
	console.error('fail',error)
}
}

main();