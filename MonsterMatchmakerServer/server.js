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

//Second find data method
router.post('/findData', (req, res) => {
  console.log(req);
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
  const {movements, alignments, types, sizesGiven, challengeRatings} = req.body;
  
  //movement queries
    var querytemp={};
  querytemp['$and']=[];
  if(movements["Fly"]=== true){
    querytemp['$and'].push({'speed.fly': {$exists:true}});
  }if(movements["Walk"]=== true){
    querytemp['$and'].push({'speed.walk': {$exists:true}});
  }if(movements["Burrow"]=== true){
    querytemp['$and'].push({'speed.burrow': {$exists:true}});
}if(movements["Swim"]=== true){
  querytemp['$and'].push({'speed.swim': {$exists:true}});
}if(movements["Climb"]=== true){
  querytemp['$and'].push({'speed.climb': {$exists:true}});
}
if(querytemp['$and'].length!=0){
  query['$and'].push(querytemp);
}

//alignment queries
 var querytemp={};
  querytemp['$or']=[];
  if(alignments["Lawful Good"]=== true){
    querytemp['$or'].push({alignment: {$eq:"lawful good"}});
  }if(alignments["Neutral Good"]=== true){
    querytemp['$or'].push({alignment: {$eq:"neutral good"}});
  }if(alignments["Chaotic Good"]=== true){
    querytemp['$or'].push({alignment: {$eq:"chaotic good"}});
  }if(alignments["Lawful Neutral"]=== true){
    querytemp['$or'].push({alignment: {$eq:"lawful neutral"}});
  }if(alignments["Neutral"]=== true){
    querytemp['$or'].push({alignment: {$eq:"neutral"}});
  }if(alignments["Chaotic Neutral"]=== true){
    querytemp['$or'].push({alignment: {$eq:"chaotic neutral"}});
  }if(alignments["Lawful Evil"]=== true){
    querytemp['$or'].push({alignment: {$eq:"lawful evil"}});
  }if(alignments["Neutral Evil"]=== true){
    querytemp['$or'].push({alignment: {$eq:"neutral evil"}});
  }if(alignments["Chaotic Evil"]=== true){
    querytemp['$or'].push({alignment: {$eq:"chaotic evil"}});
  }
  if(querytemp['$or'].length!=0){
    query['$and'].push(querytemp);
  }

//for monster types
  var querytemp={};
  querytemp['$or']=[];
  if(types["Aberration"]==true){
    querytemp['$or'].push({type: {$eq:"aberration"}});
  }if(types["Dragon"]==true){
    querytemp['$or'].push({type: {$eq:"dragon"}});
  }if(types["Giant"]==true){
    querytemp['$or'].push({type: {$eq:"giant"}});
  }if(types["Plant"]==true){
    querytemp['$or'].push({type: {$eq:"plant"}});
  }if(types["Beast"]==true){
    querytemp['$or'].push({type: {$eq:"beast"}});
  }if(types["Elemental"]==true){
    querytemp['$or'].push({type: {$eq:"elemental"}});
  }if(types["Humanoid"]==true){
    querytemp['$or'].push({type: {$eq:"humanoid"}});
  }if(types["Undead"]==true){
    querytemp['$or'].push({type: {$eq:"undead"}});
  }if(types["Celestial"]==true){
    querytemp['$or'].push({type: {$eq:"celestial"}});
  }if(types["Fey"]==true){
    querytemp['$or'].push({type: {$eq:"fey"}});
  }if(types["Monstrosity"]==true){
    querytemp['$or'].push({type: {$eq:"monstrosity"}});
  }if(types["Construct"]==true){
    querytemp['$or'].push({type: {$eq:"construct"}});
  }if(types["Fiend"]==true){
    querytemp['$or'].push({type: {$eq:"fiend"}});
  }if(types["Ooze"]==true){
    querytemp['$or'].push({type: {$eq:"ooze"}});
  }
  if(querytemp['$or'].length!=0){
    query['$and'].push(querytemp);
  }

//challenge rating
  var querytemp={};
  querytemp['$and']=[];
    if(challengeRatings.min!=""){
      querytemp['$and'].push({challenge_rating: {$gte:parseInt(challengeRatings.min, 10)}});
    }if(challengeRatings.max!=""){
      querytemp['$and'].push({challenge_rating: {$lte:parseInt(challengeRatings.max, 10)}});
    }
    if(querytemp['$and'].length!=0){
      query['$and'].push(querytemp);
    }
//Sizes
  var querytemp={};
  querytemp['$or']=[];
  var use;
  for(let val of sizes) {
    if(val==sizesGiven.min || sizesGiven.max=="")
      use=true;
    if(use==true)
      querytemp['$or'].push({size: {$eq:val}});
    if(val==sizesGiven.max){
      break
    }
  }
if(querytemp['$or'].length!=0){
  query['$and'].push(querytemp);
}

  //no input provided
  if(query['$and'].length==0){
    query={};
  }

  console.log(query);
  Data.find(query, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json( data );
  });
});

//encounter builder method
router.post('/findMonsters', (req, res) => {
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
    const {movements, alignments, types, sizesGiven, challengeRatings} = req.body;
  
  //movement queries
    var querytemp={};
  querytemp['$and']=[];
  if(movements["Fly"]=== true){
    querytemp['$and'].push({'speed.fly': {$exists:true}});
  }if(movements["Walk"]=== true){
    querytemp['$and'].push({'speed.walk': {$exists:true}});
  }if(movements["Burrow"]=== true){
    querytemp['$and'].push({'speed.burrow': {$exists:true}});
}if(movements["Swim"]=== true){
  querytemp['$and'].push({'speed.swim': {$exists:true}});
}if(movements["Climb"]=== true){
  querytemp['$and'].push({'speed.climb': {$exists:true}});
}
if(querytemp['$and'].length!=0){
  query['$and'].push(querytemp);
}

//alignment queries
 var querytemp={};
  querytemp['$or']=[];
  if(alignments["Lawful Good"]=== true){
    querytemp['$or'].push({alignment: {$eq:"lawful good"}});
  }if(alignments["Neutral Good"]=== true){
    querytemp['$or'].push({alignment: {$eq:"neutral good"}});
  }if(alignments["Chaotic Good"]=== true){
    querytemp['$or'].push({alignment: {$eq:"chaotic good"}});
  }if(alignments["Lawful Neutral"]=== true){
    querytemp['$or'].push({alignment: {$eq:"lawful neutral"}});
  }if(alignments["Neutral"]=== true){
    querytemp['$or'].push({alignment: {$eq:"neutral"}});
  }if(alignments["Chaotic Neutral"]=== true){
    querytemp['$or'].push({alignment: {$eq:"chaotic neutral"}});
  }if(alignments["Lawful Evil"]=== true){
    querytemp['$or'].push({alignment: {$eq:"lawful evil"}});
  }if(alignments["Neutral Evil"]=== true){
    querytemp['$or'].push({alignment: {$eq:"neutral evil"}});
  }if(alignments["Chaotic Evil"]=== true){
    querytemp['$or'].push({alignment: {$eq:"chaotic evil"}});
  }
  if(querytemp['$or'].length!=0){
    query['$and'].push(querytemp);
  }

//for monster types
  var querytemp={};
  querytemp['$or']=[];
  if(types["Aberration"]==true){
    querytemp['$or'].push({type: {$eq:"aberration"}});
  }if(types["Dragon"]==true){
    querytemp['$or'].push({type: {$eq:"dragon"}});
  }if(types["Giant"]==true){
    querytemp['$or'].push({type: {$eq:"giant"}});
  }if(types["Plant"]==true){
    querytemp['$or'].push({type: {$eq:"plant"}});
  }if(types["Beast"]==true){
    querytemp['$or'].push({type: {$eq:"beast"}});
  }if(types["Elemental"]==true){
    querytemp['$or'].push({type: {$eq:"elemental"}});
  }if(types["Humanoid"]==true){
    querytemp['$or'].push({type: {$eq:"humanoid"}});
  }if(types["Undead"]==true){
    querytemp['$or'].push({type: {$eq:"undead"}});
  }if(types["Celestial"]==true){
    querytemp['$or'].push({type: {$eq:"celestial"}});
  }if(types["Fey"]==true){
    querytemp['$or'].push({type: {$eq:"fey"}});
  }if(types["Monstrosity"]==true){
    querytemp['$or'].push({type: {$eq:"monstrosity"}});
  }if(types["Construct"]==true){
    querytemp['$or'].push({type: {$eq:"construct"}});
  }if(types["Fiend"]==true){
    querytemp['$or'].push({type: {$eq:"fiend"}});
  }if(types["Ooze"]==true){
    querytemp['$or'].push({type: {$eq:"ooze"}});
  }
  if(querytemp['$or'].length!=0){
    query['$and'].push(querytemp);
  }

  //Challenge Ratings
  if(challengeRatings.length!=0){
      var querytemp={};
      querytemp['$or']=[];
      for(let val of challengeRatings){
          querytemp['$or'].push({challenge_rating: {$eq:parseInt(val, 10)}});
      }
      query['$and'].push(querytemp);
  }

  //Sizes
  var querytemp={};
  querytemp['$or']=[];
  var use;
  for(let val of sizes) {
    if(val==sizesGiven.min || sizesGiven.max=="")
      use=true;
    if(use==true)
      querytemp['$or'].push({size: {$eq:val}});
    if(val==sizesGiven.max){
      break
    }
  }
if(querytemp['$or'].length!=0){
  query['$and'].push(querytemp);
}
  
    //no input provided
    if(query['$and'].length==0){
      query={};
    }
  
    console.log(query);
    Data.find(query, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json( data );
    });
  });

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));