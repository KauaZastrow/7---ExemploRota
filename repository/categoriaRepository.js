const categorias = []

export function cadastrar(categoria){
    categorias.push(categoria);
}

export function listar(){
    return categorias;
}

export function buscarPorIndice(indice){
    return categorias[indice];
}

export function atualizar(indice, categoria){
    categorias[indice] = categoria;
}

export function deletar(indice){
    categorias.splice(indice,1);
}