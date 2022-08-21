import http from 'node:http'
import url from 'node:url'
import { roll } from './services/diceRoll.js'
//import handler from './utils/handler.js'

const PORT = process.env.PORT || 3000
const HOST = '127.0.0.1'

const servidor = http.createServer( (req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'})
    //res.write(req.url)
    const p = url.parse(req.url, true).query

    const resultado = roll(parseInt(p.quantidade))
    //console.log(resultado)


    res.write('<br>' + resultado)
    res.end()
})

servidor.listen(PORT, HOST, () => console.log(`Server is running at ${PORT}`))