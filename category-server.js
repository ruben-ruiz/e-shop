const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs')
const host = 'localhost'
const port = 8000

app.use(express.json());
app.use(cors());

const categoryJson = fs.readFileSync('category.json', 'utf8');

app.get('/api/products', (req, res) => {
  res.send(categoryJson);
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => { console.log(`server is running http://${host}:${port}`) });