//node.js module used to deal with operationson file like read,write, delete nad many more using in-built methods
const fs = require('node:fs/promises');

//read items.json
async function getStoredItems() {
  const rawFileContent = await fs.readFile('items.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}
//re-write the content of items.json
function storeItems(items) {
  return fs.writeFile('items.json', JSON.stringify({ items: items || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;