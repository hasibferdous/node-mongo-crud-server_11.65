const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;
const { MongoClient, ServerApiVersion } = require('mongodb');

//middleware
app.use(cors());
app.use(express.json());

//user: dbUser2
//pass: xbRrLkEE05BrZ181
const uri = "mongodb+srv://dbUser2:xbRrLkEE05BrZ181@cluster0.ambheuq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){

}

run().catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello from node mongo crud server');

});

app.listen(port, () =>{
    console.log(`node server running on port ${port}`);
})