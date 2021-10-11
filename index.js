const express = require('express')
const { get } = require('https')
const app = express()
const path = require('path')

const convert = require('./lib/convert')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
  response.render('home')
})

app.get('/cotacao', (request, response) => {
  const { cotacao, quantidade } = request.query

  if (cotacao && quantidade) {
    const conversao = convert.convert(cotacao, quantidade)
    response.render('cotacao', {
      error: false,
      cotacao: convert.toMoney(cotacao),
      quantidade: convert.toMoney(quantidade),
      conversao: convert.toMoney(conversao)
    })
  }
  else {
    response.render('cotacao', {
      error: 'Valores Inválidos!'
    })
  }

})



app.listen(3000, error => {
  if (error) {
    console.log('i can not start the project | Error : ', error)
  }
  else {
    console.log('ConvertMyMoney is Work!!!')
  }
})