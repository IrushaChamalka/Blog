require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts')

const connectDB = require('./server/config/db');


const app = express();
const PORT = 5000 || process.env.PORT;

// conected to db
connectDB();

app.use(express.static('public'));

//Templating engine
app.use(expressLayout)
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/route/main'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});