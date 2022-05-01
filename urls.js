const fs = require('fs');
const axios = require('axios');


function writeFile(filePath, fileInfo) {
    fs.writeFile(filePath, fileInfo, "utf8", (err) => {
        if(err) {
            console.log(err);
            process.exit(1);
        }
        else {
            console.log("Wrote File");
        }
    })
}

function readFiles(path) {
    fs.readFile(path, 'utf8' ,(err, data) => {
        if(err) {
            console.log(err);
            process.exit(1);
        }
        else {
            const lines = data.split(/\r?\n/)
            console.log(lines)
            writeToFiles(lines)
            
        }
    })
}

async function writeToFiles(lines) {

        for(let line of lines) {
            try {
                let url = await axios.get(line.trim());
                if(line[7] === "/") {
                    let fileName = line.slice(8,18)
                    writeFile(fileName, String(url.data))
                }
                else {
                    let fileName = line.slice(7)
                    writeFile(fileName, String(url.data))
                }
                
            }
            catch (err) {
                console.log(`not a valid URL`);
                // console.log(err)
            }
            
        }
    

}
        
        


readFiles(process.argv[2])


// async function q() {
//     const t = await axios.get("https://nodejs.org/api/console.html");
//     console.log(t)
// }   

// q()
