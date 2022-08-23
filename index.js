import http from 'node:http'
import url from 'node:url'
import { roll } from './services/diceRoll.js'
import handler from './utils/handler.js'

const PORT = process.env.PORT || 3000
const HOST = '127.0.0.1'

const servidor = http.createServer(handler).listen(PORT, HOST, () => console.log(`Server is running at ${PORT}`))