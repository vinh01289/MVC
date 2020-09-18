const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{

    //Ket noi voi models va lay du lieu

    var main = 'partials/main';
    res.render('index', {main : main});
});

module.exports = router;