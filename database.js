const { MongoClient } = require('mongodb');

const url = "mongodb+srv://reddappareddy18:JUQHJzKDD8r5LZXr@myfirsttproject.lei10.mongodb.net/?retryWrites=true&w=majority&appName=myfirsttproject";

// Connection URL
const client = new MongoClient(url);

// Database Name
const dbName = 'firstdatabase';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');

    // the following code examples can be pasted here...

    // Insert the data
    
    const data = {
        firstname: "raju",
        secondname: "malluri",
        phonenumber: "1234567889",
        city: "bangalore"
    }

    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);

    //Read the data from database

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());