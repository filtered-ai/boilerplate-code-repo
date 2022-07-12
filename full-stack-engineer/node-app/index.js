const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.sendFile('index.html', {root: __dirname});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})