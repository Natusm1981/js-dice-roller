import {once} from 'node:events'
import { DEFAULT_HEADER } from '../utils/util.js'
import { roll } from './diceRoll.js'


const routes = ({
    diceRoutes
}) => ({
    ':get': async (request, response) =>{
        const resultado = await roll(request)
        response.write(JSON.stringify(resultado))
        return response.end()
    },
    ':post': async (request, response) =>{
       
        response.write(JSON.stringify({data:'Testando'}))
        return response.end()
    },
})

export{
    routes
}