import express from "express"
import produtoRoutes from "./routes/produtoRoutes.js"
import categoriaRoutes from "./routes/categoriaRoutes.js"
import fornecedorRoutes from "./routes/fornecedorRoutes.js"

const app = express();

app.use(express.json());

app.use("/produto", produtoRoutes);
app.use("/categoria", categoriaRoutes);
app.use("/fornecedor", fornecedorRoutes);

app.listen(3001, () =>{
    console.log("servidor rodando em http://localhost:3001")
})