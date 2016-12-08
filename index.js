var express = require('express')
var app = express()
var path = require('path')

app.use('/css', express.static('css'))
app.use('/img', express.static('img'))
app.use('/js', express.static('js'))
app.use('/less', express.static('less'))
app.use('/mail', express.static('mail'))
app.use('/vendor', express.static('vendor'))


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})