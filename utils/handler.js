//import url from 'node:url'
import { parse } from 'node:url'
import { routes } from '../services/routes.js'

import { API_HEADER, HTML_HEADER } from '../utils/util.js'

const rotas = routes()


const allRoutes =  {
    ...rotas,

    default: (req, res) =>{
        res.writeHead(404, HTML_HEADER)
        res.write('<p>Rota inválida, utilizar .../api?valor=6 Ex. "/api?valor=6" para gerar um numero aleatório entre 1 e 6</p>')
        return res.end()
    }
}


function handler (req, res){
    const {
        url,
        method
    } = req
    const { pathname } = parse(url, true)
    const key = `${pathname}:${method.toLowerCase()}`
    const chosen = allRoutes[key] || allRoutes.default
    //console.log({key})
    //console.log(req)
    //console.log(chosen.toString())

    return Promise.resolve(chosen(req, res))
    .catch(handlerError(res))
}

function handlerError(response){
    return error => {
        console.log('Deu RUIM :(', error.stack)
        response.writeHead(500, HTML_HEADER)
        response.write(JSON.stringify({
            error: 'internal server ERROR'
        }))
        return response.end()
    }
    
}
export default handler