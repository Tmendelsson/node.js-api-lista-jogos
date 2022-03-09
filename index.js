const bodyParser = require('body-parser')
const { error } = require('console')
const express = require ('express')
const app = express()

app.use(bodyParser.json())

const jogosquetenho = []
app.post('/api/jogos', (requisicao, resposta) =>{
    try{
        if(!requisicao.body.nome || !requisicao.body.plataforma){
            throw new error('campos invalidos!!')
        }
    }catch(erro){
        resposta.send(JSON.stringify({mensagem: erro.message}))
    }
    jogosquetenho.push(requisicao.body)
    resposta.send(JSON.stringify(requisicao.body))

})
app.get('/api/jogos', (requisicao, resposta)=>{
    resposta.send(JSON.stringify(jogosquetenho))
})

app.listen(3000,()=> console.log('API esta funcionando'))