import express from "express";
import multer from "multer";
import cors from "cors";
import { listaPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";


const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

//  configuração necessária para sistemas windows, mas dispensável
//    para sistema Linux e Apple

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
}) 


const upload = multer({ dest: "./uploads" , storage});

//const upload = multer({ dest: "./uploads" });

const routes = (app) => {
    // Habilita o parsing de JSON no corpo das requisições
    app.use(express.json());

    app.use(cors(corsOptions));
    // Rota para obter todos os posts
    app.get("/posts", listaPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost);
    // Rota para fazer upload de imagens
    app.post("/upload", upload.single("imagem"), uploadImagem);
    // Rota para atualizar um post
    app.put("/upload/:id", atualizarNovoPost);
};

export default routes;