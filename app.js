const exp = require('express');
const app = exp();
const PORT = process.env.PORT || 3000;
const vb = require('volleyball');

app.use(vb);

app.get('/',(req, res, next)=>{
  res.send({
    message: "Welcome to WIP!"
  });
});

app.listen(PORT, ()=>{
console.log(`Server running on: http://localhost:${PORT}`);
});
