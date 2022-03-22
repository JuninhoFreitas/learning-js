const {
    Console
} = require('console')
const http = require('http')
const DEFAULT_USER = {
    username: 'Juninho',
    password: '123'
}
const routes = {
    '/contact:get': (request, response) => {
        response.write('contact us page')
        return response.end();
    },
    '/login:post': async (request, response) => {
        // response é um iterator!
        const er = await request
        for await (let data of er) {
            console.log('user', user)
            const user = JSON.parse(data)

            if (user.username !== DEFAULT_USER.username || 
                user.password !== DEFAULT_USER.password) {
                    console.log('ENTROU NO ERRO')
                response.writeHead(401)
                response.write('Logging failed!')
                return response.end()
            }
            console.log('ENTROU NO ACERRTO')
            response.write('Logging has succeeded');
            return response.end()


        }
        done()

    },
    default: (request, response) => {
        response.write('Hello World!')
        return response.end();
    }
}

const handler = function (request, response) {
    const {
        url,
        method
    } = request
    const routeKey = `${url}:${method.toLowerCase()}`
    const chosen = routes[routeKey] || routes.default
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    return chosen(request, response);
}

const app = http.createServer(handler).listen(3000, () => {
    return console.log('Server is running ', 3000)
})

module.exports = app