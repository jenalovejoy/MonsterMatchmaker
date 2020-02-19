const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("../data");

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute =
  "mongodb+srv://Dawson:Char1zard%21@capstonecluster-amhqv.mongodb.net/DnDDatabase?retryWrites=true&w=majority";
// 'mongodb://Dawson:Char1zard@ds249583.mlab.com:49583/DnD';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find({ name: "Adult Red Dragon" }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    console.log(data);
    return res.json({ success: true, data: data });
  });
});

//The find data method
// router.post('/findData', (req, res) => {
//   const { id } = req.body;
//   console.log(id);
//   Data.find({name: id}, (err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     console.log(data);
//     return res.json( data );
//   });
// });

//The find data method
// router.post('/findData', (req, res) => {
//   const { id } = req.body;
//   console.log(id);
//   Data.find({'speed.fly':{ $exists: true }}, (err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     console.log(data);
//     return res.json( data );
//   });
// });

//Second find data method
router.post("/findData", (req, res) => {
  var query = {};
  //var queryA={};
  const {
    fly,
    walk,
    burrow,
    swim,
    climb,
    lawfulGood,
    neutralGood,
    chaoticGood,
    lawfulNeutral,
    neutral,
    chaoticNeutral,
    lawfulEvil,
    neutralEvil,
    chaoticEvil,
    aberration,
    dragon,
    giant,
    plant,
    beast,
    elemental,
    humanoid,
    undead,
    celestial,
    fey,
    monstrosity,
    construct,
    fiend,
    ooze
  } = req.body;
  //console.log(id);
  console.log(aberration);
  //console.log(walk);
  // if(id!= 0){
  //   query['name']=id;
  // }
  //movement queries
  if (fly === true) {
    query["speed.fly"] = { $exists: true };
  }
  if (walk === true) {
    query["speed.walk"] = { $exists: true };
  }
  if (burrow === true) {
    query["speed.burrow"] = { $exists: true };
  }
  if (swim === true) {
    query["speed.swim"] = { $exists: true };
  }
  if (climb === true) {
    query["speed.climb"] = { $exists: true };
  }
  //alignment queries
  if (
    lawfulGood === true ||
    neutralGood === true ||
    chaoticGood === true ||
    lawfulNeutral === true ||
    neutral === true ||
    chaoticNeutral === true ||
    lawfulEvil === true ||
    neutralEvil === true ||
    chaoticEvil === true
  ) {
    query["$or"] = [];
    if (lawfulGood === true) {
      query["$or"].push({ alignment: { $eq: "lawful good" } });
    }
    if (neutralGood === true) {
      query["$or"].push({ alignment: { $eq: "neutral good" } });
    }
    if (chaoticGood === true) {
      query["$or"].push({ alignment: { $eq: "chaotic good" } });
    }
    if (lawfulNeutral === true) {
      query["$or"].push({ alignment: { $eq: "lawful neutral" } });
    }
    if (neutral === true) {
      query["$or"].push({ alignment: { $eq: "neutral" } });
    }
    if (chaoticNeutral === true) {
      query["$or"].push({ alignment: { $eq: "chaotic neutral" } });
    }
    if (lawfulEvil === true) {
      query["$or"].push({ alignment: { $eq: "lawful evil" } });
    }
    if (neutralEvil === true) {
      query["$or"].push({ alignment: { $eq: "neutral evil" } });
    }
    if (chaoticEvil === true) {
      query["$or"].push({ alignment: { $eq: "chaotic evil" } });
    }
  }
  //for monster types
  if (
    aberration == true ||
    dragon == true ||
    giant == true ||
    plant == true ||
    beast == true ||
    elemental == true ||
    humanoid == true ||
    undead == true ||
    undead == true ||
    celestial == true ||
    fey == true ||
    monstrosity == true ||
    construct == true ||
    fiend == true ||
    ooze == true
  ) {
    var querytemp = {};
    querytemp["$or"] = [];
    query["$and"] = [];
    if (aberration == true) {
      querytemp["$or"].push({ type: { $eq: "aberration" } });
    }
    if (dragon == true) {
      querytemp["$or"].push({ type: { $eq: "dragon" } });
    }
    if (giant == true) {
      querytemp["$or"].push({ type: { $eq: "giant" } });
    }
    if (plant == true) {
      querytemp["$or"].push({ type: { $eq: "plant" } });
    }
    if (beast == true) {
      querytemp["$or"].push({ type: { $eq: "beast" } });
    }
    if (elemental == true) {
      querytemp["$or"].push({ type: { $eq: "elemental" } });
    }
    if (humanoid == true) {
      querytemp["$or"].push({ type: { $eq: "humanoid" } });
    }
    if (undead == true) {
      querytemp["$or"].push({ type: { $eq: "undead" } });
    }
    if (celestial == true) {
      querytemp["$or"].push({ type: { $eq: "celestial" } });
    }
    if (fey == true) {
      querytemp["$or"].push({ type: { $eq: "fey" } });
    }
    if (monstrosity == true) {
      querytemp["$or"].push({ type: { $eq: "monstrosity" } });
    }
    if (construct == true) {
      querytemp["$or"].push({ type: { $eq: "construct" } });
    }
    if (fiend == true) {
      querytemp["$or"].push({ type: { $eq: "fiend" } });
    }
    if (ooze == true) {
      querytemp["$or"].push({ type: { $eq: "ooze" } });
    }
    query["$and"].push(querytemp);
  }

  //query['$and'].push({$or:[{type: {$eq:"dragon"}}]});

  console.log(query);
  Data.find(query, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    //console.log(data);
    return res.json(data);
  });
});

// router.get('/getSpecificData', (req, res) => {
//     console.log(req);
//     const { id } = req.body;
//     var query = {};
//     if( id !== "" ) {
//         query["index"] = id;
//     }
//     // if( your_second_variable !== "" ) {
//     //     query["some_other_key"] = your_second_variable;
//     // }
//     Data.find(query, function(err, data) {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true, data: data });
//     });
//     // Data.where({name: 'Adult Red Dragon'},(err, data) => {
//     //   if (err) return res.json({ success: false, error: err });
//     //   console.log(data);
//     //   return res.json({ success: true, data: data });
//     // });
//   });

// this is our update method
// this method overwrites existing data in our database
// router.post('/updateData', (req, res) => {
//   const { id, update } = req.body;
//   Data.findByIdAndUpdate(id, update, (err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// this is our delete method
// this method removes existing data in our database
// router.delete('/deleteData', (req, res) => {
//   const { id } = req.body;
//   Data.findByIdAndRemove(id, (err) => {
//     if (err) return res.send(err);
//     return res.json({ success: true });
//   });
// });

// this is our create methid
// this method adds new data in our database
// router.post('/putData', (req, res) => {
//   let data = new Data();

//   const { id, message } = req.body;

//   if ((!id && id !== 0) || !message) {
//     return res.json({
//       success: false,
//       error: 'INVALID INPUTS',
//     });
//   }
//   data.message = message;
//   data.id = id;
//   data.save((err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
