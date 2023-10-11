const mongoString = "mongodb+srv://marcin240204:Rademenes13@cluster0.dat668z.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');

const client = new MongoClient(mongoString);

async function main() {
    try {
        await client.connect();

        await listDB(client);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

async function listDB(client) {

    let databaseList = await client.db().admin().listDatabases();

    console.log(databaseList);
}

main();