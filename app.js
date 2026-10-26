import express from "express"
import produtoRoutes from "./routes/produtoRoutes.js"

const app = express();

app.use(express.json());

app.use("/produto", produtoRoutes);

app.listen(3001, () =>{
    console.log("servidor rodando em http://localhost:3001")
})