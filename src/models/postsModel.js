import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados MongoDB usando a string de conexão fornecida
const conec = await conectarAoBanco(process.env.STRING_CONNECTION);

// Função assíncrona para buscar todos os posts do banco de dados
export  async function getTodosPosts() {
    // Obtém o banco de dados 'imersao-instabyte'
    const db = conec.db("imersao-instabyte");
    // Obtém a coleção 'posts' dentro do banco de dados
    const collec = db.collection("posts");
    // Busca todos os documentos da coleção 'posts' e retorna um array com os resultados
    return collec.find().toArray();
  }
  
export async function criarPost(novoPost){
    const db = conec.db("imersao-instabyte");
    const collec = db.collection("posts");
    return collec.insertOne(novoPost);
}  
export async function atualizarPost(id, novoPost){
    const db = conec.db("imersao-instabyte");
    const collec = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);
    return collec.updateOne({_id: new ObjectId(objId)}, {$set:novoPost});
}