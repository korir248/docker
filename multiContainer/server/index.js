const express = require('express')
const cors = require('cors')
const app =express();
const data = require('./data.json');
const port = 8000;
app.use(cors())
app.get('/', (req, res) => {
    res.json(data);
});
app.listen(port,()=>{
    console.log('server is running on port:'+port);
})