xlsx = require('node-xlsx').default;
const path = require('path');
const fs = require('fs');
const { Pool, Client } = require('pg')
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');





const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'erupe',
  password: '123',
  port: 5432,
})
client.connect()




//empty the table////////////////////////////////////////////////
// client.query('TRUNCATE normal_shop_items', (err, res) => {
//   console.log(err, res)
// })



var counter = 2






client.query('TRUNCTUATE TABLE normal_shop_items', (err, res) => {
  console.log(err, res)
})




// // const { timeStamp } = require('console');
// // const directoryPath = path.join(__dirname, 'spreadsheets');
var discordarray = []
var dbarray = []


 
function addtodb(itemid) {
  dbarray.push([10, 4, counter++, itemid, 1000, 1, 0, 0, 1, 1, 0, 1, 40, 0])
}



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













console.log('dbarray')
console.log(dbarray)


const out = convertArrayToCSV(dbarray)
console.log(out)
fs.writeFile('out.csv', out, (err) => {
  console.log(err)
})


client.query("\copy normal_shop_items FROM '/home/brody/mhrandomizer/out.csv' DELIMITER ',' CSV", (err, res) => {
  console.log(err, res)
})



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

