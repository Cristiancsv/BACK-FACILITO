
import { Book } from "../models/Book.js";
import { Gender } from "../models/Gender.js";

Book.belongsToMany(Gender, { through: "book-gender" });

Gender.belongsToMany(Book, { through: "book-gender" });