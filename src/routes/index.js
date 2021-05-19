const express = require('express');
const router = express.Router();

// Principal Page
router.get('/', (req, respuesta) => {
    //respuesta.send('Hello World');
    //console.log(__dirname + '/views/index.html');
    //console.log(path.join(__dirname, 'views/index.html'));
    //respuesta.sendFile(path.join(__dirname, 'views/index.html'));

    respuesta.render('index.html', {title : 'First Node Website'});
    
});
// Contact Page
router.get('/contact', (req, res) => {
    
    res.render('contact.html', {title : 'Contact Page'});
    
});

module.exports = router;