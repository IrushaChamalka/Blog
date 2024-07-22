const express = require('express')
const router = express.Router();

//Router
router.get('',(req, res) => {

    const locals = {
        title: "Nodejs Blog",
        description: "Simple Blog created with Nodejs, Express & MongoDb"
    }

    res.render('index', { locals });
});

router.get('/about',(req, res) => {
    res.render('about');
});

router.get('/contact',(req, res) => {
    res.render('contact');
});

module.exports = router;