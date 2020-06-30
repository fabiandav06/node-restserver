require('./config/config');
const express = require('express')
const app = express()

const bodyParser = require('body-parser')

//midlewares

app.use(bodyParser.urlencoded({ extended: false })) //Captador de datos registrados para un campo
app.use(bodyParser.json()) // utilizacion de la funcion por medio del Json

//const port = process.env.PORT || 3000;


//settings

app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    res.json({
        persona: body
    });
});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id

    res.json({
        id
    });
});


app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});

//Starting the server
app.listen(process.env.PORT, () => {
    console.log(`Listening on the port: ${process.env.PORT}`);
})