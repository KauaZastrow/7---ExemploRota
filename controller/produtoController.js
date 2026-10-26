import {Produto} from "../model/Produto.js"
import {atualizar, cadastrar, listar, deletar, buscarPorIndice} from "../repository/produtoRepository.js"

export function cadastrarProduto(req, res) {
    const {descricao, preco, peso} = req.body;

    const produto = new Produto(descricao, preco, peso);

    cadastrar(produto);

    res.status(201).json({mensagem:"Produto cadastrado com sucesso"});
}

export function listarProdutos (req, res){
    const listaProdutos = listar()

    res.status(200).json(listaProdutos);
}

export function BuscarProdutoPorIndice(req, res){
    const indice = Number(req.params.indice);

    const produto = buscarPorIndice(indice);

    if(!produto){
        return res.status(404).json({mensagem: "Produto não encontrado"});
    }

    res.status(200).json(produto);

}

export function atualizarProduto (req, res){
    const indice = Number(req.params.indice);

    const produto = buscarPorIndice(indice);

    if(!produto){
        return res.status(404).json({mensagem:"Produto não encontrado"})
    }

    const {descricao, preco, peso} = req.body;

    if(descricao != undefined){
        produto.descricao = descricao;
    }

    if (preco != undefined){
        produto.preco = preco;
    }

    if(peso != undefined){
        produto.peso = peso;
    }

    atualizar(indice, produto);

    res.status(200).json({mensagem:"Produto atualizado com sucesso"})
}

export function deletarProduto(req, res){
    const indice = Number(req.params.indice);

    const produto = buscarPorIndice(indice);

    if (!produto){
        return res.status(404).json({mensagem:" Produto não encontrado"});
    }

    deletar(indice);

    res.status(204);
}