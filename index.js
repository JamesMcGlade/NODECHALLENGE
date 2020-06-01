const express = require ('express'); //npm i express-handlebars
const hbs = require ('express-handlebars');
const path = require('path');
const app = express();
require ('dotenv').config() // npm i dotenv

// below your external module imports
const HarryPotter = require('./lib/HarryPotter.js');
const StarWars = require ('./lib/StarWars.js')
// above your app.use

app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));
app.set('view engine', '.hbs');

app.get('/', async (req, res) => { // localhost:3000/ home page
    let data = await StarWars.getLukeSkywalker();
    console.log(data)
    let name = data.name;
    let hair = data.hair_color;
    let planet = data.homeworld;
    let movies = data.films[0];

    res.render('index', { name, hair, planet, movies });
});

app.get('/about', async (req, res) => {
    let data = await HarryPotter.getSortingHat();
    console.log(data);
    res.render('about', { data })
})

app.listen(3000,() => { // localhost:3000 but can be any port between 3000-8000 i think
    console.log("listening on port 3000"); 
})