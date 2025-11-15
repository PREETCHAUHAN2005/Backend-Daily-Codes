const { count } = require("console");
const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://preetchauhan271105_db_user:Preet20@clusterpreet1.oqnlvmd.mongodb.net/?appName=Clusterpreet1";
const client = new MongoClient(url);
const dbName = "LearnMongo";
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");

  // the following code examples can be pasted here...

  const data = {
    fname: "Radhika",
    lname: "Chauhan",
    relation: "Sister",
    city: "Siyana",
  };
  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);

  const findResult = await collection.find({ name: "Radhika" }).toArray();
  console.log("Documents are =>", findResult);
  const countResult = await collection.countDocuments({});
  console.log("Count of documents in the user collection =>", countResult);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
