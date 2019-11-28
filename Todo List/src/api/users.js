import config from './config'

function getUser(nomeDoUsuario){
    return config.get(`/users/${nomeDoUsuario}`)
}

function getRepos(nomeUsuario){
    return config.get(`/users/${nomeUsuario}/repos`)
}

export { getUser, getRepos }