const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json())

app.post('/',async function(req, res, next) {
  try {

    results = [];
    
    for(let dev of req.body.developers) {
      let d = await axios.get(`https://api.github.com/users/${dev}`)
      results.push(d)
    }

    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.json(out);
  } 
  catch(err) {
    next(err);
  }
});

app.listen(3000);
