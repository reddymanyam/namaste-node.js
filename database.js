const { MongoClient } = require('mongodb');

const url = "mongodb+srv://reddappareddy18:JUQHJzKDD8r5LZXr@myfirsttproject.lei10.mongodb.net/?retryWrites=true&w=majority&appName=myfirsttproject";  

// Connection URL
const client = new MongoClient(url);

// Database Name
const dbName = 'firsttproject';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');
  
    // the following code examples can be pasted here...
  
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());