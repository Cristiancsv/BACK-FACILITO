'use strict'
const { Book, Gender } = require('../db');
const bookJSON = require('./audiobooks.json')

const bookJSONSliced = bookJSON.books.book.slice(0, 20)

const array = [
    {
      id: 43,
      nombre: "El viejo arbol",
      img: "https://www.laprensa.com.ar/multimedios/imgs/137943_620.jpg",
      link: "https://www.youtube.com/watch?v=deQaA80k2_8",
      des: "descripción del arbol viejo",
      gender: "miedo",
      descriptiongender:"da miedo",
    },
    {
      id: 23,
      nombre: "EL ERIZO Y EL GLOBO",
      img: "https://storage.googleapis.com/www-paredro-com/uploads/2018/10/Leches-La-Laguna-el-significado-del-logo-de-LALA1.jpg",
      link: "https://www.youtube.com/watch?v=9SiNFya55Fo",
      des: "esta descripción del 2",
      gender:"risa",
      descriptiongender:"da risa",
    },
  ];

  const getApi = async () => {
    const db = await Book.findAll();
  
    // if (db.length === 0) {
    //   bookJSONSliced.map(async (e) => {
    //     await Book.findOrCreate({
    //       where: {
    //         title: e.title,
    //         //img: e.img,
    //         //description: e.description?e.description:e.description.text,
    //         link: e.url_text_source, 
    //       },
    //     });
    //   });
    //   return bookJSONSliced;
    // } else {
    //   return db;
    // }
  
   
  };
  
  const getBooks = async (req, res) => {
    const sent = await getApi();
    res.send(sent);
  };

  module.exports = {
    getBooks
  }