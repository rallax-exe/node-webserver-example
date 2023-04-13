require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars para Modelo Vista Controlador
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Middleware
//Servir contenido estatico
app.use(express.static('public'));


//Rutas

//Controlador - MVC
app.get('/', (req, res) => {

    //Renderiza la vista home page desde el servidor
    res.render('home', {
        nombre: 'Raul',
        titulo: 'Curso de Node '
    });

});

app.get('/generic', (req, res) => {

    //Renderiza la vista home page desde el servidor
    res.render('generic', {
        nombre: 'Raul',
        titulo: 'Curso de Node '
    });

});

app.get('/elements', (req, res) => {

    //Renderiza la vista home page desde el servidor
    res.render('elements', {
        nombre: 'Raul',
        titulo: 'Curso de Node '
    });

});

app.get('*', (req, res) => {

    res.sendFile(__dirname + '/public/404.html');

});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})