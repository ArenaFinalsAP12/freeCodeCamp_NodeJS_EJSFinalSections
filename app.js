// Getting Started with EJS Templates with Express
/*
const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');
app.get('/:userQuery',(req,res)=> {
    res.render('index',{data: {userQuery: req.params.userQuery, 
                                searchResults : ['book1','book2','book3'],
                                loggedIn : false,
                                username : 'amisilsreception'}})
});
app.listen(3000);
*/
// How does Middleware Work and Creating Custom Middleware
/*
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use((req,res,next)=> {
    // console.log(req.url,req.method);
    req.banana = 'banana';
    next();
});

app.get('/',(req,res)=> {
    console.log(req.banana);
    res.send('Middleware');
}); 
app.listen(3000);
*/
// Working with the Express Router

const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname, 'static')));
app.set('view engine','ejs');

const people = require('./routes/people');

app.use('/people',people);

app.listen(3000);