const express = require('express')
const bodyParser = require('body-parser')
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get('/home', (req, resp) => {
    resp.render('home')
})

app.listen(3000, () => {
    console.log('Server Running On PORT 3000')
})