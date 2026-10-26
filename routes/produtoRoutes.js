import express from "express" ;
import { cadastrarProduto,
    listarProdutos,
    BuscarProdutoPorIndice,
    atualizarProduto,
    deletarProduto
 } from "../controller/produtoController.js";

 const router = express.Router();
 router.post("/", cadastrarProduto);
 router.get("/", listarProdutos);
 router.get("/:indice", BuscarProdutoPorIndice);
 router.patch("/:indice", atualizarProduto);
 router.delete("/:indice", deletarProduto);

 export default router;