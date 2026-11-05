import express from "express"
import produtoRoutes from "./routes/produtoRoutes.js"
import categoriaRoutes from "./routes/categoriaRoutes.js"
import fornecedorRoutes from "./routes/fornecedorRoutes.js"
import conexao from "./config/conexao.js"
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/produto", produtoRoutes);
app.use("/categoria", categoriaRoutes);
app.use("/fornecedor", fornecedorRoutes);


async function iniciarServidor() {
    try {
        const conexaoText = await conexao.getConnection();
        
        app.listen(PORT, () => {
            console.log(`servidor rodando em http://localhost:${PORT}`)
        })
    }catch(erro){
        console.log("Erro ao conectar o banco de dados");
        console.log(erro.mensagem);
        process.exit(1)
    }
}
iniciarServidor()