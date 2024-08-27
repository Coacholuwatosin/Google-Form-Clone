const express = require('express');
const app = express();
const port = 5000;
const path = require('path');


app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages'));


app.get('/', (req, res) => {
    res.render('index');
});


app.post('/submit', (req, res) => {
    const formData = req.body;
    res.render('result', { formData });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
