const express = require('express');
const dbConnect = require('./config/dbConnection');
const port = 9966;
const app = express();



app.set('view engine', 'ejs');
app.use(express.urlencoded());


app.get('/', (req, res) => {
    return res.render('home');
})
app.use('/bookForm',require('./routes/bookRoutes'));



app.listen(port, () => {


    console.log(`Server Start at http://localhost:${port}`);
})