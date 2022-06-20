const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.use('/static' , express.static('static'));

app.engine('hbs' , hbs.engine({
    extname: 'hbs'
}));

app.set('view engine' , 'hbs');
app.set('views' , './src/views');

app.get('/' , (req , res) =>{
    res.render('index')
});

app.listen(3000 , () => console.log(`App is listening on port 3000`));