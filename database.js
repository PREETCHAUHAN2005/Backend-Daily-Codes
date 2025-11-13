const { MongoClient } = require("mongodb");

async function runGetStarted() {
  const url =
    "mongodb+srv://preetchauhan271105_db_user:Preet20@clusterpreet1.oqnlvmd.mongodb.net/?appName=Clusterpreet1";
  const client = new MongoClient(url);
  try {
    const database = client.db("LearnMongo");
    const movies = database.collection("Preet");
    const query = { field: "name" };
    const movie = await movies.findOne(query);

    const data = {
      fname: "Radhika",
      lname: "Chauhan",
      relation: "Sister",
      city: "Siyana",
    };
    const findResult = await movies.find({}).toArray();
    console.log("Documents Found are =>", findResult);
    const insertResult = await movies.insertMany([data]);
console.log('Inserted documents =>', insertResult);
    console.log(movie);
    return "done.";
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);
