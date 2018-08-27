const express = require('express');
const router = require('./src/routes');
const app = require('./src/app');

const PORT = process.env.PORT || 5000;

app.listen(PORT);