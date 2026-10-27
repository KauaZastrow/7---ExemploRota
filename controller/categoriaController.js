import { Categoria } from "../model/Categoria.js"
import { atualizar, cadastrar, listar, deletar, buscarPorIndice } from "../repository/categoriaRepository.js"

export function cadastrarCategoria(req, res) {
    const { nome, descricao } = req.body;

    const categoria = new Categoria(nome, descricao);

    cadastrar(categoria);

    res.status(201).json({ mensagem: "Categoria cadastrado com sucesso" });
}

export function listarCategorias(req, res) {
    const listaCategorias = listar();

    res.status(200).json(listaCategorias);
}

export function buscarCategoriaPorIndice(req, res) {
    const indice = Number(req.params.indice);

    const categoria = buscarPorIndice(indice);

    if (!categoria) {
        return res.status(404).json({ mensagem: "Categoria não encontrada" });
    }

    res.status(200).json(categoria);
}

export function atualizarCategoria(req, res) {
    const indice = Number(req.params.indice);

    const categoria = buscarPorIndice(indice);

    if (!categoria) {
        return res.status(404).json({ mensagem: "Categoria não encontrada" });
    }

    const { nome, descricao } = req.body

    if (nome != undefined) {
        categoria.nome = nome;
    }

    if (descricao != undefined) {
        categoria.descricao = descricao;
    }

    atualizar(indice, categoria);

    res.status(200).json({ mensagem: "Categoria atualizada com sucesso" })
}

export function deletarCategoria(req, res) {
    const indice = Number(req.params.indice);

    const categoria = buscarPorIndice(indice);

    if (!categoria) {
        return res.status(404).json({ mensagem: " Categoria não encontrada" });
    }

    deletar(indice);

    res.status(204);
}