const express = require('express')
const app = express();
const PORT = 3000;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

db.sequelize.sync()
  .then((result) => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.log(err)})

app,post('/komik', async (req, res) => {
  const data = req.body;
  try {
    const komik = await db.Komik.create(data);
    res.send(komik);
  } catch (error) {
    res.send(error)
  }
})