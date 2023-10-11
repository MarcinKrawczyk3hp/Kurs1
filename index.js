const mongoString = "mongodb+srv://marcin240204:Rademenes13@cluster0.dat668z.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');

const client  = MongoClient(mongoString);

async function main() {
    await client.connect();

    await client.close();
}

main();