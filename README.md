
# Myntra Clone(using react-redux) 

I build the 85% approx. identical copy of the Myntra shopping web app using the JavaScript's React framework with the react-redux state management liabrary.







## Features

- State usage/distribution from the central store
- Reducer chunks for each individual task/functionality
- Business logic and UI completely separated
- Add to bag
- Remove from bag
- Dynamic Price Calculation


## 🛠 Skills
#### Frontend 
Javascript, HTML, CSS, React, react-redux and some other hooks

#### Backend
Node.js and Express.js 

#### Database
Hard coded content in data's "item.json"


## Run Locally

Clone the project

```bash
  git clone https://github.com/rishi2136/myntra-project.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Usage/Examples

```javascript
//route to get data from backend
app.get('/items', async (req, res) => {
  const storedItems = await getStoredItems();
  res.json({ items: storedItems });
});
```


## Greeting 
Thanks for visiting my repository, Hope you can understand implementation.