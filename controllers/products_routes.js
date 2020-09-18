const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    var main = 'products/main';
    res.render('index', {main : main});
});

module.exports = router;