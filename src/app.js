const express = require('express');
const path = require('path');
const hbs = require('hbs')

const app = express();
const port = process.env.PORT || 8081

const staticpath = path.join(__dirname, '/public');
const viewsDir = path.join(__dirname, '/public/views');
const partialViewsDir = path.join(__dirname, '/public/partials');

app.use(express.static(staticpath));
app.set('view engine', 'hbs');
hbs.registerPartials(partialViewsDir);

//express will serch for the views folder outside the src folder. By setting the below code, 
//express will look for the actual path
app.set('views', viewsDir);

app.get('/world', (req, res) => {
    res.send('Hello world');
});

app.get('', (req, res) => {
    res.render('index', {
        title: "Index",
        name: "Dinesh Balaji",
        age: "30"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        name: "Dinesh Balaji",
        age: "30"
    });
});

app.get('/data', (req, res) => {
    const data = [{
        name: "Dinesh Balaji",
        age: "29"
    },
    {
        name: "Arun",
        age: "22"
    },
    {
        name: "Balaji",
        age: "21"
    }]
    if (!req.query.search) {
        return res.send({
            Error: "URL should contain a Search option"
        })
    }
    res.send({
        Search: "You are searching by " + req.query.search + " search value is " + req.query.name + ".",
        Data: data
    });
});

app.get('*', (req, res) => {
    res.send('Error 404: Page not found');
})

app.listen(port, () => {
    console.log('server is up on port ' + port)
})