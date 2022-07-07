import {Book} from '../models/Book.js'


 const array  = [
 {id:43,
 nombre:"El viejo arbol",
 img:"https://www.laprensa.com.ar/multimedios/imgs/137943_620.jpg",
 link:"https://www.youtube.com/watch?v=deQaA80k2_8",
 des:"descripción del arbol viejo"
},
{id:23,
nombre:"EL ERIZO Y EL GLOBO",
img:"https://storage.googleapis.com/www-paredro-com/uploads/2018/10/Leches-La-Laguna-el-significado-del-logo-de-LALA1.jpg",
link:"https://www.youtube.com/watch?v=9SiNFya55Fo",
des:"esta descripción del 2"}]



// INTENTO DE función principal que carga base de datos 
const getApi = async () => {
  const db = await Book.findAll()
  
  if(db.length === 0){
  array.map(async (e) => {
            await Book.findOrCreate({
            	where : {
            		name : e.nombre,
            		img: e.img,
            		description: e.des,
            		link: e.link
            	}
            })})
  return array} else {
  	return db
  }


}

export const getBooks = async (req, res) => {
	const la = await getApi();
	res.send(la);
}