const MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    let dbo = db.db('mydbw3');

    //Create collection

    // dbo.createCollection("customers", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     db.close();
    //   });

    //InsertOne

//     let myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });

    //InsertMany

    // let myobj = [
    //     { name: 'John', address: 'Highway 71'},
    //     { name: 'Peter', address: 'Lowstreet 4'},
    //     { name: 'Amy', address: 'Apple st 652'},
    //     { name: 'Hannah', address: 'Mountain 21'},
    //     { name: 'Michael', address: 'Valley 345'},
    //     { name: 'Sandy', address: 'Ocean blvd 2'},
    //     { name: 'Betty', address: 'Green Grass 1'},
    //     { name: 'Richard', address: 'Sky st 331'},
    //     { name: 'Susan', address: 'One way 98'},
    //     { name: 'Vicky', address: 'Yellow Garden 2'},
    //     { name: 'Ben', address: 'Park Lane 38'},
    //     { name: 'William', address: 'Central st 954'},
    //     { name: 'Chuck', address: 'Main Road 989'},
    //     { name: 'Viola', address: 'Sideway 1633'}
    // ];
    // dbo.collection("customers").insertMany(myobj, function(err, res) {
    //     if (err) throw err;
    //     console.log("Number of documents inserted: " + res.insertedCount);
    //     db.close();
    // });

    //SORT

    // var mysort = { name: 1 };
    // dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    //deleteOne, deleteMany

    //dbo.collection("customers").drop()
    //dbo.dropCollection

    //updateOne

    // let newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
    // dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    //   if (err) throw err;
    //   console.log("1 document updated");
    //   db.close();
    // });

    //updateMany

    //skip, limit

    //join: just one: Left outer join
    
    // dbo.collection('orders').aggregate([
    //     { $lookup:
    //        {
    //          from: 'products',
    //          localField: 'product_id',
    //          foreignField: '_id',
    //          as: 'orderdetails'
    //        }
    //      }
    // ]).toArray(function(err, res) {
    //     if (err) throw err;
    //     console.log(JSON.stringify(res));
    //     db.close();
    // });

});
