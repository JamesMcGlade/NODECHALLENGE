const express = require ('express'); //npm i express-handlebars
const hbs = require ('express-handlebars');
const path = require('path');
const app = express();
require ('dotenv').config // npm i dotenv
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));
app.set('view engine', '.hbs');
app.get('/', async (req, res) => { // localhost:3000/ home page
    res.send('something or nothing')
});
app.listen(3000,() => { // localhost:3000 but can be any port between 3000-8000 i think
    console.log("listening on port 3000"); 
})