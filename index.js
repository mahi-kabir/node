const express = require('express');

const app = express();

const rootCall = (req, res) =>{
    res.send('node opened!!')
}

app.get('/', rootCall)

app.listen(3001, ()=> console.log('listening to port 3000'));