import express from "express" ;
import { cadastrarFornecedor,
    listarFornecedores,
    buscarFornecedorPorId,
    atualizarFornecedor,
    deletarFornecedor
 } from "../controller/fornecedorController.js";

 const router = express.Router();
 router.post("/", cadastrarFornecedor);
 router.get("/", listarFornecedores);
 router.get("/:id", buscarFornecedorPorId);
 router.patch("/:id", atualizarFornecedor);
 router.delete("/:id", deletarFornecedor);

 export default router;