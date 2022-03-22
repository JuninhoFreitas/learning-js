const {describe, it} = require('mocha');
const request = require('supertest')
const app = require('./api')
const assert = require('assert')

describe('API Suite test', ()=>{
    describe('/contact',()=>{
        it('should request the content page and return HTTP Status 200', async()=>{
            const response = await request(app).get('/contact').expect(200)
            assert.deepStrictEqual(response.text, 'contact us page')
        })
    })
    describe('/hello',()=>{
        it('should request an inexistent route /hi and redirect to /hello', async()=>{
            const response = await request(app).get('/hi').expect(200)
            assert.deepStrictEqual(response.text, 'Hello World!')
        })
    })
    describe('/login',()=>{
        it('should login successfully on the login route and return HTTP Status 200', async()=>{
            const response = await (await request(app).post('/login')).send({
                username:"Juninho",password:"123"
            }).expect(200)
            assert.deepStrictEqual(response.text, 'Logging has succeeded')
        })
    })
})