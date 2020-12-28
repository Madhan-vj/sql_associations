const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const book = require('./routes/book');
const author = require('./routes/author');
const bookauthor = require('./routes/bookAuthor');
const PORT = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/book', book);
app.use('/author', author);
app.use('/bookauthor', bookauthor);

app.listen(PORT, () => {
    console.log(`app is running on PORT:${PORT}`)
});