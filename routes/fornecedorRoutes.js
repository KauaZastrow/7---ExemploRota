import express from "express" ;
import { cadastrarFornecedor,
    listarFornecedores,
    buscarFornecedorPorIndice,
    atualizarFornecedor,
    deletarFornecedor
 } from "../controller/fornecedorController.js";

 const router = express.Router();
 router.post("/", cadastrarFornecedor);
 router.get("/", listarFornecedores);
 router.get("/:indice", buscarFornecedorPorIndice);
 router.patch("/:indice", atualizarFornecedor);
 router.delete("/:indice", deletarFornecedor);

 export default router;