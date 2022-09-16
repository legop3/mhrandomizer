xlsx = require('node-xlsx').default;
const path = require('path');
const fs = require('fs');
const { Pool, Client } = require('pg')
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');
// const { Client, Intents } = require('discord.js');

// const client = new Client({ intents: [Intents.FLAGS.GUILDS] });



const sql = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'erupe',
  password: '123',
  port: 5432,
})
sql.connect()




///schedule the evrything to do it





////empty the table////////////////////////////////////////////////
sql.query('TRUNCATE normal_shop_items', (err, res) => {
  console.log(err, res)
})



var counter = 2






// client.query('TRUNCTUATE TABLE normal_shop_items', (err, res) => {
//   console.log(err, res)
// })




// // const { timeStamp } = require('console');
// // const directoryPath = path.join(__dirname, 'spreadsheets');
var discordarray1 = []
var discordarray2 = []
var discordarray3 = []
var discordarray4 = []
var discordarray5 = []
var discordarray6 = []
var discordarray7 = []
var discordarray8 = []
var discordarray9 = []
var dbarray = []



function addtodiscord(japname, engname) {
      if(!engname) {
            engname = 'missing name'
      }

      if(!japname) {
            japname = 'missing name'
      }

      discordarray1.push({name: engname, value: japname})
}


function addtodiscord2(japname, engname) {
      if(!engname) {
            engname = 'missing name'
      }

      if(!japname) {
            japname = 'missing name'
      }

      discordarray2.push({name: engname, value: japname})
}


function addtodiscord3(japname, engname) {
      if(!engname) {
            engname = 'missing name'
      }

      if(!japname) {
            japname = 'missing name'
      }

      discordarray3.push({name: engname, value: japname})
}


function addtodiscord4(japname, engname) {
      if(!engname) {
            engname = 'missing name'
      }

      if(!japname) {
            japname = 'missing name'
      }

      discordarray4.push({name: engname, value: japname})
}


function addtodiscord5(japname, engname) {
      if(!engname) {
            engname = 'missing name'
      }

      if(!japname) {
            japname = 'missing name'
      }

      discordarray5.push({name: engname, value: japname})
}


function addtodiscord6(japname, engname) {
      if(!engname) {
            engname = 'missing name'
      }

      if(!japname) {
            japname = 'missing name'
      }

      discordarray6.push({name: engname, value: japname})
}


function addtodiscord7(japname, engname) {
      if(!engname) {
            engname = 'missing name'
      }

      if(!japname) {
            japname = 'missing name'
      }

      discordarray7.push({name: engname, value: japname})
}


function addtodiscord8(japname, engname) {
      if(!engname) {
            engname = 'missing name'
      }

      if(!japname) {
            japname = 'missing name'
      }

      discordarray8.push({name: engname, value: japname})
}


function addtodiscord9(japname, engname) {
      if(!engname) {
            engname = 'missing name'
      }

      if(!japname) {
            japname = 'missing name'
      }

      discordarray9.push({name: engname, value: japname})

}


 
function addtodb(itemid) {
  dbarray.push([10, 8, counter++, itemid, 1000, 1, 0, 0, 1, 1, 0, 1, 40, 0])
}

  dbarray.push([10, 8, 1, 5755, 25, 50, 0, 0, 1, 1, 0, 1, 5, 0, null])


//gacha armor
var gachaarmor = xlsx.parse(`./spreadsheets/Gacha_Armor.xlsx`)
gachaarmor.forEach(element => {
        console.log('gacha armor')
            for(var i = 0; i < 10; i++){
                  var item = element.data[Math.floor(Math.random()*element.data.length)]
                  console.log(item)
                  itemid = item[2]
                  addtodb(itemid)
                  engname = item[1]
                  japname = item[0]
                  addtodiscord(japname, engname)
            }
});

//gacha bowguns
var gachabowguns = xlsx.parse(`./spreadsheets/Gacha_Bowguns.xlsx`)
gachabowguns.forEach(element => {
        console.log('gacha armor')
            for(var i = 0; i < 5; i++){
                  var item = element.data[Math.floor(Math.random()*element.data.length)]
                  console.log(item)
                  itemid = item[2]
                  addtodb(itemid)
                  engname = item[1]
                  japname = item[0]
                  addtodiscord2(japname, engname)
            }
});

//gacha weps
var gachaweps = xlsx.parse(`./spreadsheets/Gacha_Weps.xlsx`)
gachaweps.forEach(element => {
        console.log('gacha armor')
            for(var i = 0; i < 25; i++){
                  var item = element.data[Math.floor(Math.random()*element.data.length)]
                  console.log(item)
                  itemid = item[2]
                  addtodb(itemid)
                  engname = item[1]
                  japname = item[0]
                  addtodiscord3(japname, engname)
            }
});

//other armor
var otherarmor = xlsx.parse(`./spreadsheets/Other_Armor.xlsx`)
otherarmor.forEach(element => {
        console.log('gacha armor')
            for(var i = 0; i < 10; i++){
                  var item = element.data[Math.floor(Math.random()*element.data.length)]
                  console.log(item)
                  itemid = item[2]
                  addtodb(itemid)
                  engname = item[1]
                  japname = item[0]
                  addtodiscord4(japname, engname)
            }
});

//other bowguns
var otherbowguns = xlsx.parse(`./spreadsheets/Other_Bowguns.xlsx`)
otherbowguns.forEach(element => {
        console.log('gacha armor')
            for(var i = 0; i < 10; i++){
                  var item = element.data[Math.floor(Math.random()*element.data.length)]
                  console.log(item)
                  itemid = item[2]
                  addtodb(itemid)
                  engname = item[1]
                  japname = item[0]
                  addtodiscord5(japname, engname)
            }
});

//other weps
var otherweps = xlsx.parse(`./spreadsheets/Other_Weps.xlsx`)
otherweps.forEach(element => {
        console.log('gacha armor')
            for(var i = 0; i < 25; i++){
                  var item = element.data[Math.floor(Math.random()*element.data.length)]
                  console.log(item)
                  itemid = item[2]
                  addtodb(itemid)
                  engname = item[1]
                  japname = item[0]
                  addtodiscord6(japname, engname)
            }
});

//prem armor
var premarmor = xlsx.parse(`./spreadsheets/Prem_Armor.xlsx`)
premarmor.forEach(element => {
        console.log('gacha armor')
            for(var i = 0; i < 30; i++){
                  var item = element.data[Math.floor(Math.random()*element.data.length)]
                  console.log(item)
                  itemid = item[2]
                  addtodb(itemid)
                  engname = item[1]
                  japname = item[0]
                  addtodiscord7(japname, engname)
            }
});

//prem bowguns
var prembowguns = xlsx.parse(`./spreadsheets/Prem_Bowguns.xlsx`)
prembowguns.forEach(element => {
        console.log('gacha armor')
            for(var i = 0; i < 25; i++){
                  var item = element.data[Math.floor(Math.random()*element.data.length)]
                  console.log(item)
                  itemid = item[2]
                  addtodb(itemid)
                  engname = item[1]
                  japname = item[0]
                  addtodiscord8(japname, engname)
            }
});

//prem weps
var premweps = xlsx.parse(`./spreadsheets/Prem_Weps.xlsx`)
premweps.forEach(element => {
        console.log('gacha armor')
            for(var i = 0; i < 20; i++){
                  var item = element.data[Math.floor(Math.random()*element.data.length)]
                  console.log(item)
                  itemid = item[2]
                  addtodb(itemid)
                  engname = item[1]
                  japname = item[0]
                  addtodiscord9(japname, engname)
            }
});

//remaining mats
// var remainingmats = xlsx.parse(`./spreadsheets/Remaining_mats.xlsx`)
// remainingmats.forEach(element => {
//         console.log('gacha armor')
//             for(var i = 0; i < 10; i++){
//                   var item = element.data[Math.floor(Math.random()*element.data.length)]
//                   console.log(item)
//                   itemid = item[2]
//                   addtodb(itemid)
//             }
// });


console.log('dbarray')
console.log(dbarray)


const out = convertArrayToCSV(dbarray)
console.log(out)
fs.writeFile('/tmp/out.csv', out, (err) => {
  console.log(err)
})


sql.query("copy normal_shop_items FROM '/tmp/out.csv' WITH CSV", (err, res) => {
  console.log(err, res)
  sql.end()
})

fs.unlinkSync('/home/brody/mhrandomizer/discord.json')

fs.unlinkSync('/home/brody/mhrandomizer/discord2.json') 

fs.unlinkSync('/home/brody/mhrandomizer/discord3.json') 

fs.unlinkSync('/home/brody/mhrandomizer/discord4.json') 

fs.unlinkSync('/home/brody/mhrandomizer/discord5.json') 

fs.unlinkSync('/home/brody/mhrandomizer/discord6.json') 

fs.unlinkSync('/home/brody/mhrandomizer/discord7.json') 

fs.unlinkSync('/home/brody/mhrandomizer/discord8.json') 

fs.unlinkSync('/home/brody/mhrandomizer/discord9.json')  

console.log(discordarray1)

fs.writeFile('/home/brody/mhrandomizer/discord.json', JSON.stringify(discordarray1), function(err){if(err){console.error(err)}})

console.log(discordarray2)

fs.writeFile('/home/brody/mhrandomizer/discord2.json', JSON.stringify(discordarray2), function(err){if(err){console.error(err)}})

console.log(discordarray3)

fs.writeFile('/home/brody/mhrandomizer/discord3.json', JSON.stringify(discordarray3), function(err){if(err){console.error(err)}})

console.log(discordarray4)

fs.writeFile('/home/brody/mhrandomizer/discord4.json', JSON.stringify(discordarray4), function(err){if(err){console.error(err)}})

console.log(discordarray5)

fs.writeFile('/home/brody/mhrandomizer/discord5.json', JSON.stringify(discordarray5), function(err){if(err){console.error(err)}})

console.log(discordarray6)

fs.writeFile('/home/brody/mhrandomizer/discord6.json', JSON.stringify(discordarray6), function(err){if(err){console.error(err)}})

console.log(discordarray7)

fs.writeFile('/home/brody/mhrandomizer/discord7.json', JSON.stringify(discordarray7), function(err){if(err){console.error(err)}})

console.log(discordarray8)

fs.writeFile('/home/brody/mhrandomizer/discord8.json', JSON.stringify(discordarray8), function(err){if(err){console.error(err)}})

console.log(discordarray9)

fs.writeFile('/home/brody/mhrandomizer/discord9.json', JSON.stringify(discordarray9), function(err){if(err){console.error(err)}})




//client.login(process.env.TOKEN)















//  async function printCsv(dbarray) {
//     console.log(
//       await new ObjectsToCsv(dbarray).toString(header=false)
//     );


//      var out = await new ObjectsToCsv(dbarray).toString(header=false)
    
// // //fijkolsydnofl7iyuasdon;lyfuaoisyfdnoiysfdoiyaoiyhe[oiryum[oaevium[opreuv[rpuew[pvruwo[ivru9ow83ern9o8yw9qa8r4yvp9tr8u49ptun98rut09ur0[tu-rtret[]wr[et][wre]t[w]re[t]wre[t]wer[t]w[ert]wre[t]we[rt]w[ert]er[t]]]]]]]]
//  }
//  printCsv(dbarray);


//   (async () => {
//    var out = await new ObjectsToCsv(dbarray).toString(header=false)
//    await console.log(out)
//  })


//  new ObjectsToCsv(dbarray).toDisk('./out.csv', { Header:false });



//      for(var i = 0; i < 9; i++){
//          console.log(gachaarmor.data[Math.floor(Math.random()*gachaarmor.data.length)][2]) 
//      }

 









// //  fs.readdir(directoryPath, function (err, files) {
//      //handling error
//      if (err) {
//          return console.log('Unable to scan directory: ' + err);
//      } 
//      //listing all files using forEach
//      files.forEach(function (file) {
//          // Do whatever you want to do with the file
//           console.log(file); 
//      });
//  });

//  const getAllFiles = function(dirPath, arrayOfFiles) {
//      files = fs.readdirSync(dirPath)
  
//      arrayOfFiles = arrayOfFiles || []
  
//      files.forEach(function(file) {
//        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
//          arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
//        } else {
//          arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
//        }
//      })
    
//      return arrayOfFiles
//    }




//  console.log(getAllFiles("spreadsheets"))

//  getAllFiles("spreadsheets").forEach(element => {
//      console.log('wa')
//       console.log(element)
//      const sheetopen = xlsx.parse(element)
//  sheetopen.forEach(element => {
//    console.log(element)

//       console.log(element)
//       element.data.forEach(element => {
//           console.log(element)
//           console.log('waw')
//       })

//      for(var i = 0; i < 9; i++){
//          console.log(element.data[Math.floor(Math.random()*element.data.length)][2])
        
//      }






 //})

  

 //})

