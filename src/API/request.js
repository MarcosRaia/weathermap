import api from './requestConfig';

const tratarRequisicao = async (requisicao) => {
    return console.log("Ok")
}

export const get = async (link) => {
    return tratarRequisicao(api.get(link))
}
export const post = async (link, body) => {
        return tratarRequisicao(api.post(link, body))
    }
export const put = async (link, body) => {
    return tratarRequisicao(api.put(link, body))
}
export const patch = async (link, body) => {
    return tratarRequisicao(api.patch(link, body))
}
export const del = async (link) => {
    return tratarRequisicao(api.delete(link))
}