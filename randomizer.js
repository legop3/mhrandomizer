xlsx = require('node-xlsx').default;
const path = require('path');
const fs = require('fs');
const { Client } = require('pg')
var json2csv = require('json2csv');
const client = new Client({
  user: 'postgres',
  password: '123',
  database: 'erpue',
  port: 5432,
  host: 'localhost'
})

client.connect()








var counter = 2



client.query('SELECT * FROM normal_shop_items', (err, res) => {
    console.log(res.rows)
})





// client.query('TRUNCTUATE TABLE normal_shop_items', (err, res) => {
//   console.log(err, res)
// })




// const { timeStamp } = require('console');
// const directoryPath = path.join(__dirname, 'spreadsheets');
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



client.end()



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

