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

const PLAYER_XP_THRESHOLD = {
    1: {"Easy": 25, "Medium": 50, "Hard": 75, "Deadly": 100},
    "2": {"Easy": 50, "Medium": 100, "Hard": 150, "Deadly": 200},
    "3": {"Easy": 75, "Medium": 150, "Hard": 225, "Deadly": 400},
    "4": {"Easy": 125, "Medium": 250, "Hard": 375, "Deadly": 500},
    "5": {"Easy": 250, "Medium": 500, "Hard": 750, "Deadly": 1100},
    "6": {"Easy": 300, "Medium": 600, "Hard": 900, "Deadly": 1400},
    "7": {"Easy": 350, "Medium": 750, "Hard": 1100, "Deadly": 1700},
    "8": {"Easy": 450, "Medium": 900, "Hard": 1400, "Deadly": 2100},
    "9": {"Easy": 550, "Medium": 1100, "Hard": 1600, "Deadly": 2400},
    "10": {"Easy": 600, "Medium": 1200, "Hard": 1900, "Deadly": 2800},
    "11": {"Easy": 800, "Medium": 1600, "Hard": 2400, "Deadly": 3600},
    "12": {"Easy": 1000, "Medium": 2000, "Hard": 3000, "Deadly": 4500},
    "13": {"Easy": 1100, "Medium": 2200, "Hard": 3400, "Deadly": 5100},
    "14": {"Easy": 1250, "Medium": 2500, "Hard": 3800, "Deadly": 5700},
    "15": {"Easy": 1400, "Medium": 2800, "Hard": 4300, "Deadly": 6400},
    "16": {"Easy": 1600, "Medium": 3200, "Hard": 4800, "Deadly": 7200},
    "17": {"Easy": 2000, "Medium": 3900, "Hard": 5900, "Deadly": 8800},
    "18": {"Easy": 2100, "Medium": 4200, "Hard": 6300, "Deadly": 9500},
    "19": {"Easy": 2400, "Medium": 2900, "Hard": 7300, "Deadly": 10900},
    "20": {"Easy": 2800, "Medium": 5700, "Hard": 8500, "Deadly": 12700}
}
  
const EXP_BY_CHALLENGE_RATING = {
    0: 0 | 10,
    .125: 25,
    .75: 50,
    .5: 100,
    1: 200,
    2: 450,
    3: 700,
    4: 1100,
    5: 1800,
    6: 2300,
    7: 2900,
    8: 3900,
    9: 5000,
    10: 5900,
    11: 7200,
    12: 8400,
    13: 10000,
    14: 11500,
    15: 13000,
    16: 15000,
    17: 18000,
    18: 20000,
    19: 22000,
    20: 25000,
    21: 33000,
    22: 41000,
    23: 50000,
    24: 62000,
    25: 75000,
    26: 90000,
    27: 105000,
    28: 120000,
    29: 135000,
    30: 155000 
};

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

router.post('/encounter', (req, res) => {

    const query = {};

    const filters = req.filters;

    if (filters.alignment) {
        let queryTemp = {};
        
    }

    Data.find(query, (err, data) => {
        if (err) return res.json({ success: false, error: err });
        //console.log(data);
        return res.json( data );
    });
});

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
    console.log(query['$and']);
    Data.find(query, (err, data) => {
        if (err) return res.json({ success: false, error: err });
        //console.log(data);
        return res.json( data );
    });
});

router.post('/monsters', async (req, res) => {
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
    minSize, maxSize, minChallenge, maxChallenge, playerLevels, encounterDifficulty} = req.body;
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
      console.log(query['$and']);

      let results = {};
      Data.find(query, (err, data) => {
          if (err) return res.json({ success: false, error: err });
          //console.log(data);
          console.log(data);
      });

      // CURRENT ISSUE: this function needs to wait for results before running 
      await findEncounter(results, playerLevels, encounterDifficulty);

      return results;
});

async function findEncounter(data, playerLevels, encounterDifficulty){
    const partyXP = getPartyXP(playerLevels, encounterDifficulty);
    const monstersByXP = findMonstersByXP(data, partyXP);
    // Will be array of multiple encounter options
    let encounters = [];

    // findMonsterLevels()
    // selectMonsters()
}

function selectMonsters(monsterLevels, partyXP){
    let encounters = [];

    // Find one-monster option
    // if monsterLevels[partyXP] exists -> 
    // add one-monster option to encounters as an array to the counter array

    // Find 2-monster option (remember penalty to threshold, monster multiplier)
    // If only 1 with a given score, use that multiple times

    // Find 3-6 monsters option (with penalty to threshold)

}

async function findMonstersByXP(data, partyXP){
    console.log(data.length);
    // object holding level
    let monstersByXP = {
        // 100 : [monster, monster, ...]
    }
    for (let monster in data){
        console.log(monster);
        // find challenge rating -> convert to XP
        let challengeRating = monster.challenge_rating;
        let monsterXP = convertToMonsterXP(challengeRating);
        console.log(monsterXP);

        if (monsterXP > partyXP){
            break; // we don't need this monster - it's outside of the useable range
        }

        // add to XP counter object
        // if the rating is already in there
        if (monsterXP in monstersByXP){
            monstersByXP[monsterXP].push(monster);
        } else {
            monstersByXP[monsterXP] = [monster];
        }
    }

    for (let XP in monstersByXP){
        console.log(XP);
    }

    return monstersByXP;
}  

async function getPartyXP(playerLevels, encounterDifficulty){

    let partySum = 0;
    for (let level of playerLevels){
        partySum += PLAYER_XP_THRESHOLD[level][encounterDifficulty];
    }

    console.log(partySum);
    return partySum;

}

function convertToMonsterXP(challengeRating){
    return EXP_BY_CHALLENGE_RATING [challengeRating];
}


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