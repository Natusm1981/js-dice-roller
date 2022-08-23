//import {once} from 'node:events'
import url from 'node:url'
//import { HTML_HEADER, API_HEADER } from '../utils/util.js'
import { roll } from './diceRoll.js'

function getIp(req){
    const remoteIp = (req.headers['x-forwarded-for'] || '').split(',').pop() || // Recupera o IP de origem, caso a fonte esteja utilizando proxy
    req.connection.remoteAddress || // Recupera o endereço remoto da chamada
    req.socket.remoteAddress || // Recupera o endereço através do socket TCP
    req.connection.socket.remoteAddress // Recupera o endereço através do socket da conexão

    console.log(remoteIp)
    return remoteIp
}



const routes = () => ({
    '/api:get': async (req, res) =>{
    const p = await url.parse(req.url, true).query
    const resultado = await roll(parseInt(p.valor))
    res.write(JSON.stringify(resultado))
    getIp(req)
    return res.end()
    },
    '/api:post': async (request, response) =>{
       
        response.write(JSON.stringify({data:'Testando POST'}))
        return response.end()
    }
})

export{
    routes
}