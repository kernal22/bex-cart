const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'doc')));
app.listen(2555, () => { console.log('api doc is running port 2555') });