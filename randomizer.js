xlsx = require('node-xlsx').default;
const path = require('path');
const fs = require('fs');
const { Pool, Client } = require('pg')
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');

const discord = require('discord.js');

const bot = new discord.Client({ intents: [Intents.FLAGS.GUILDS] })


const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'erupe',
  password: '123',
  port: 5432,
})
client.connect()




///schedule the evrything to do it

  



////empty the table////////////////////////////////////////////////
client.query('TRUNCATE normal_shop_items', (err, res) => {
  console.log(err, res)
})



var counter = 2






// client.query('TRUNCTUATE TABLE normal_shop_items', (err, res) => {
//   console.log(err, res)
// })




// // const { timeStamp } = require('console');
// // const directoryPath = path.join(__dirname, 'spreadsheets');
var discordarray = []
var dbarray = []


 
function addtodb(itemid) {
  dbarray.push([10, 8, counter++, itemid, 1000, 1, 0, 0, 1, 1, 0, 1, 40, 0])
}

  dbarray.push([10, 8, 1, 5755, 25, 50, 0, 0, 1, 1, 0, 1, 5, 0])


//gacha armor
var gachaarmor = xlsx.parse(`./spreadsheets/Gacha_Armor.xlsx`)
gachaarmor.forEach(element => {
        console.log('gacha armor')
            for(var i = 0; i < 10; i++){
                  var item = element.data[Math.floor(Math.random()*element.data.length)]
                  console.log(item)
                  itemid = item[2]
                  addtodb(itemid)
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


client.query("copy normal_shop_items FROM '/tmp/out.csv' WITH CSV", (err, res) => {
  console.log(err, res)
  client.end()
})










console.log(process.env)















// async function printCsv(dbarray) {
//   // console.log(
//   //   await new ObjectsToCsv(dbarray).toString(header=false)
//   // );


//     var out = await new ObjectsToCsv(dbarray).toString(header=false)
    
// //fijkolsydnofl7iyuasdon;lyfuaoisyfdnoiysfdoiyaoiyhe[oiryum[oaevium[opreuv[rpuew[pvruwo[ivru9ow83ern9o8yw9qa8r4yvp9tr8u49ptun98rut09ur0[tu-rtret[]wr[et][wre]t[w]re[t]wre[t]wer[t]w[ert]wre[t]we[rt]w[ert]er[t]]]]]]]]
// }
// printCsv(dbarray);


// (async () => {
//   var out = await new ObjectsToCsv(dbarray).toString(header=false)
//   await console.log(out)
// })


// new ObjectsToCsv(dbarray).toDisk('./out.csv', { Header:false });



    // for(var i = 0; i < 9; i++){
    //     console.log(gachaarmor.data[Math.floor(Math.random()*gachaarmor.data.length)][2]) 
    // }

 









// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         // console.log(file); 
//     });
// });

// const getAllFiles = function(dirPath, arrayOfFiles) {
//     files = fs.readdirSync(dirPath)
  
//     arrayOfFiles = arrayOfFiles || []
  
//     files.forEach(function(file) {
//       if (fs.statSync(dirPath + "/" + file).isDirectory()) {
//         arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
//       } else {
//         arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
//       }
//     })
    
//     return arrayOfFiles
//   }




// console.log(getAllFiles("spreadsheets"))

// getAllFiles("spreadsheets").forEach(element => {
//     console.log('wa')
//     // console.log(element)
//     const sheetopen = xlsx.parse(element)
// sheetopen.forEach(element => {
//   console.log(element)

//     // console.log(element)
//     // element.data.forEach(element => {
//     //     console.log(element)
//     //     console.log('waw')
//     // })

//     for(var i = 0; i < 9; i++){
//         console.log(element.data[Math.floor(Math.random()*element.data.length)][2])
        
//     }






// })

  

// })

