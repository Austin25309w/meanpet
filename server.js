var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    secret: "whatever",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge : 60000}
}))

app.use(express.static( __dirname + '/public/dist/public' ));



app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.json())




require('./server/config/mongoose.js')

require('./server/config/routes')(app)

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
  
app.listen(8001, function(){
    console.log("rocking 8001...")
})

