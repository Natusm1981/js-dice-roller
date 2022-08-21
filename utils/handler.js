import url from 'node:url'

import { API_HEADER, HTML_HEADER } from './util/util.js'

const allRoutes = {
    default: (request, response) => {
        response.writeHead(404, HTML_HEADER)
        response.write('Hello 404')
        response.end()
    }
}

function handler (req, res){
    const {
        url,
        method
    } = req
    const { pathname } = parse(url, true)

}


export  default handler