import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do servidor Express
const app = express();
app.use(express.static("uploads"));
routes(app);

// Define a porta em que o servidor irá escutar
app.listen(3000, () => {
  console.log("Servidor escutando...");
});