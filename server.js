const express = require('express');
const res = require('express/lib/response');
const app = express();
const fs = require('fs')
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));

const { animals } = require('./data/animals');
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`API Server now on port ${PORT}`);
});
