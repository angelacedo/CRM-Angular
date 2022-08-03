const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()


app.use(cors())
app.use(express.json())
app.use(require('./routes/users.js')); //User Router
app.listen(3000, () =>{});