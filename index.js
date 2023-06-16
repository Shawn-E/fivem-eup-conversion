const fs = require('node:fs');

const inputFile = fs.readdirSync("./_eup/Input");

inputFile.forEach((x) => {
    if(x === "Placeholder") return;
    const DLC = x.split('^')[0]
    const file = x.split('^')[1]
    console.log(`Converting ${x} to singleplayer. | DLC: ${DLC} | File: ${file}`)
    if(DLC.includes('_p')) {
        fs.mkdirSync(`./_eup/Output/Props/${DLC}`, { recursive: true })
        fs.copyFileSync(`./_eup/Input/${x}`, `./_eup/Output/Props/${DLC}/${file}`)
    } else {
        fs.mkdirSync(`./_eup/Output/Clothing/${DLC}`, { recursive: true })
        fs.copyFileSync(`./_eup/Input/${x}`, `./_eup/Output/Clothing/${DLC}/${file}`)
    }
});

console.log("Your files have been coverted from fivem to singleplayer.")