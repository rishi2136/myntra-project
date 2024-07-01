const express = require('express');
const bodyParser = require('body-parser');

const { getStoredItems, storeItems } = require('./data/items');

const app = express();

app.use(bodyParser.json());

//for setup the cross origin request
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');  //cross origin client - server - backend intracion
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST'); //accepted methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  //default content setup
  next();
});

//route to get data
app.get('/items', async (req, res) => {
  const storedItems = await getStoredItems();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 4000));
  res.json({ items: storedItems });
});

//to find the unique data
app.get('/items/:id', async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});


//re-write the content of the file
app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
});

app.listen(3000, () => {
  console.log(`backend is listing at ${3000}`)
});
