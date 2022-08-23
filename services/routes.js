//import {once} from 'node:events'
import url from 'node:url'
import { HTML_HEADER, API_HEADER } from '../utils/util.js'
import { roll } from './diceRoll.js'


const routes = () => ({
    '/api:get': async (req, res) =>{
    const p = await url.parse(req.url, true).query
    const resultado = await roll(parseInt(p.valor))
    res.write(JSON.stringify(resultado))
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