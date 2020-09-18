const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // goi ejs ra su dung

const admin_routes = require('./controllers/admin_routes');
app.use('/', admin_routes);

const products_routes = require('./controllers/products_routes');
app.use('/product', products_routes);

app.listen(8000, ()=>{ console.log('da bat'); });