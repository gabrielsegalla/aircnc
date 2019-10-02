const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-kstui.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  bufferCommands:false,
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(3333);