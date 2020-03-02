const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute ="mongodb+srv://Dawson:Char1zard%21@capstonecluster-amhqv.mongodb.net/DnDDatabase?retryWrites=true&w=majority";
 // 'mongodb://Dawson:Char1zard@ds249583.mlab.com:49583/DnD';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
  Data.find({name: 'Adult Red Dragon'},(err, data) => {
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
router.post('/findData', (req, res) => {
  const sizes = [
    "Tiny",
    "Small",
    "Medium",
    "Large",
    "Huge",
    "Gargantuan"
  ];
  var query={};
  query['$and']=[];
  //var queryA={};
  const { fly,walk,burrow,swim,climb,
    lawfulGood,neutralGood,chaoticGood,lawfulNeutral,neutral,chaoticNeutral,lawfulEvil,neutralEvil,chaoticEvil,
   aberration,dragon,giant,plant,beast,elemental,humanoid,undead,celestial,fey,monstrosity,construct,fiend,ooze,
  minSize, maxSize, minChallenge, maxChallenge} = req.body;
  //console.log(id);
  //console.log(minSize);
  //console.log(walk);
  // if(id!= 0){
  //   query['name']=id;
  // }
  //movement queries
  if(fly==true||walk==true||burrow==true||swim==true||climb==true){
    var querytemp={};
  querytemp['$and']=[];
  if(fly=== true){
    querytemp['$and'].push({'speed.fly': {$exists:true}});
  }if(walk=== true){
    querytemp['$and'].push({'speed.walk': {$exists:true}});
  }if(burrow=== true){
    querytemp['$and'].push({'speed.burrow': {$exists:true}});
}if(swim=== true){
  querytemp['$and'].push({'speed.swim': {$exists:true}});
}if(climb=== true){
  querytemp['$and'].push({'speed.climb': {$exists:true}});
}
query['$and'].push(querytemp);
  }
//alignment queries
if(lawfulGood===true||neutralGood===true||chaoticGood===true||lawfulNeutral===true||neutral===true||chaoticNeutral===true||lawfulEvil===true||neutralEvil===true||chaoticEvil===true){
  var querytemp={};
  querytemp['$or']=[];
  if(lawfulGood=== true){
    querytemp['$or'].push({alignment: {$eq:"lawful good"}});
  }if(neutralGood=== true){
    querytemp['$or'].push({alignment: {$eq:"neutral good"}});
  }if(chaoticGood=== true){
    querytemp['$or'].push({alignment: {$eq:"chaotic good"}});
  }if(lawfulNeutral=== true){
    querytemp['$or'].push({alignment: {$eq:"lawful neutral"}});
  }if(neutral=== true){
    querytemp['$or'].push({alignment: {$eq:"neutral"}});
  }if(chaoticNeutral=== true){
    querytemp['$or'].push({alignment: {$eq:"chaotic neutral"}});
  }if(lawfulEvil=== true){
    querytemp['$or'].push({alignment: {$eq:"lawful evil"}});
  }if(neutralEvil=== true){
    querytemp['$or'].push({alignment: {$eq:"neutral evil"}});
  }if(chaoticEvil=== true){
    querytemp['$or'].push({alignment: {$eq:"chaotic evil"}});
  }
  query['$and'].push(querytemp);
}
//for monster types
if(aberration==true||dragon==true||giant==true||plant==true||beast==true||elemental==true||humanoid==true||undead==true||undead==true||celestial==true||fey==true||monstrosity==true||construct==true||fiend==true||ooze==true){
  var querytemp={};
  querytemp['$or']=[];
  if(aberration==true){
    querytemp['$or'].push({type: {$eq:"aberration"}});
  }if(dragon==true){
    querytemp['$or'].push({type: {$eq:"dragon"}});
  }if(giant==true){
    querytemp['$or'].push({type: {$eq:"giant"}});
  }if(plant==true){
    querytemp['$or'].push({type: {$eq:"plant"}});
  }if(beast==true){
    querytemp['$or'].push({type: {$eq:"beast"}});
  }if(elemental==true){
    querytemp['$or'].push({type: {$eq:"elemental"}});
  }if(humanoid==true){
    querytemp['$or'].push({type: {$eq:"humanoid"}});
  }if(undead==true){
    querytemp['$or'].push({type: {$eq:"undead"}});
  }if(celestial==true){
    querytemp['$or'].push({type: {$eq:"celestial"}});
  }if(fey==true){
    querytemp['$or'].push({type: {$eq:"fey"}});
  }if(monstrosity==true){
    querytemp['$or'].push({type: {$eq:"monstrosity"}});
  }if(construct==true){
    querytemp['$or'].push({type: {$eq:"construct"}});
  }if(fiend==true){
    querytemp['$or'].push({type: {$eq:"fiend"}});
  }if(ooze==true){
    querytemp['$or'].push({type: {$eq:"ooze"}});
  }
  query['$and'].push(querytemp);
}
//challenge rating
if(minChallenge!="" || maxChallenge!=""){
  var querytemp={};
  querytemp['$and']=[];
    if(minChallenge!=""){
      querytemp['$and'].push({challenge_rating: {$gte:parseInt(minChallenge, 10)}});
    }if(maxChallenge!=""){
      querytemp['$and'].push({challenge_rating: {$lte:parseInt(maxChallenge, 10)}});
    }
    query['$and'].push(querytemp);
}
//Sizes
if(minSize!="" || maxSize!=""){
  var querytemp={};
  querytemp['$or']=[];
  //query['$and']=[];
  var use;
  for(let val of sizes) {
    if(val==minSize || minSize=="")
      use=true;
    if(use==true)
      querytemp['$or'].push({size: {$eq:val}});
      console.log(val)
    if(val==maxSize){
      break
    }
}
query['$and'].push(querytemp);
  //min
    // if(minSize!="Tiny"){
    //   query['$and'].push({size: {$eq:minSize}});
    // }
    // if(minSize!="Small"){
    //   query['$and'].push({size: {$eq:minSize}});
    // }
    // if(minSize!="Medium"){
    //   query['$and'].push({size: {$eq:minSize}});
    // }
    // if(minSize!="Large"){
    //   query['$and'].push({size: {$eq:minSize}});
    // }
    // if(minSize!="Huge"){
    //   query['$and'].push({size: {$eq:minSize}});
    // }
    // if(minSize!="Gargantuan"){
    //   query['$and'].push({size: {$eq:minSize}});
    // }
    // //max
    // if(maxSize!="Tiny"){
    //   query['$and'].push({size: {$eq:minSize}});
    // }
    // if(maxSize!="Small"){
    //   query['$and'].push({size: {$eq:minSize}});
    // }
    // if(maxSize!="Medium"){
    //   query['$and'].push({size: {$eq:minSize}});
    // }
    // if(maxSize!="Large"){
    //   query['$and'].push({size: {$eq:minSize}});
    // }
    // if(maxSize!="Huge"){
    //   query['$and'].push({size: {$eq:minSize}});
    // }
    // if(maxSize!="Gargantuan"){
    //   query['$and'].push({size: {$eq:minSize}});
    // }
}

  
  
  //query['$and'].push({$or:[{type: {$eq:"dragon"}}]});

  //no input provided
  if(query['$and'].length==0){
    query={};
  }

  console.log(query);
  Data.find(query, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    //console.log(data);
    return res.json( data );
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
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));