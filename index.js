var express = require('express')
var app = express()
var path = require('path')

app.use('/css', express.static('css'))
app.use('/img', express.static('img'))
app.use('/js', express.static('js'))
app.use('/less', express.static('less'))
app.use('/mail', express.static('mail'))
app.use('/vendor', express.static('vendor'))

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'contact.html'))
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



