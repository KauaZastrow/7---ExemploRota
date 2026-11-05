import { Produto } from "../model/Produto.js"
import { atualizar, cadastrar, listar, deletar, buscarPorId } from "../repository/produtoRepository.js"

export async function cadastrarProduto(req, res) {
    try {
        const { descricao, preco, peso } = req.body;

        if (!descricao || !preco || !peso) return res.status(400).json({
            mensagem: "Descricao, preco e peso sao obrigatorias"
        })

        const produto = new Produto(descricao, preco, peso);

        const id = await cadastrar(produto);

        res.status(201).json({
            mensagem: "Produto cadastrado com sucesso",
            id_produto: id
        });
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao cadastrar produto: " + erro
        })
    }
}

export async function listarProdutos(req, res) {
    try {
        const listaProdutos = await listar()

        res.status(200).json(listaProdutos);
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao listar produtos: " + erro
        })
    }}


    export async function BuscarProdutoPorId(req, res) {
        try {
            const id = Number(req.params.id);

            const produto = await buscarPorId(id);

            if (!produto) {
                return res.status(404).json({ mensagem: "Produto não encontrado" });
            }

            res.status(200).json(produto);
        } catch (erro) {
            res.status(500).json({
                mensagem: "Erro ao buscar produto: " + erro
            })
        }
    }

    export async function atualizarProduto(req, res) {
        try{
        const id = Number(req.params.id);

        const produto = await buscarPorId(id);

        if (!produto) {
            return res.status(404).json({ mensagem: "Produto não encontrado" })
        }

        const { descricao, preco, peso } = req.body;

        if (descricao != undefined) {
            produto.descricao = descricao;
        }

        if (preco != undefined) {
            produto.preco = preco;
        }

        if (peso != undefined) {
            produto.peso = peso;
        }

        const resultado = await atualizar(id, produto);

        if (resultado === 0){
            return res.status(404).json({mensagem: "Nenhum atualizado deletado"})
        }

        res.status(200).json({ mensagem: "Produto atualizado com sucesso" })
    }catch (erro) {
            res.status(500).json({
                mensagem: "Erro ao atualizar produto: " + erro
            })
        }
    }

    export async function deletarProduto(req, res) {
        try {
        const id = Number(req.params.id);

        const produto = await buscarPorId(id);

        if (!produto) {
            return res.status(404).json({ mensagem: " Produto não encontrado" });
        }

        const resultado = await deletar(id);

        if (resultado === 0){
            return res.status(404).json({mensagem: "Nenhum produto deletado"})
        }

        res.status(204);
    }catch (erro) {
            res.status(500).json({
                mensagem: "Erro ao deletar produto: " + erro
            })
        }
    }