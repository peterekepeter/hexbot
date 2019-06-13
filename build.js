const fs = require('fs').promises;

async function main(){
    const distDir = './dist';
    makeSureDirExists(distDir);
    cp('./palettify.html', distDir + "/index.html");
}

async function cp(src, dest){
    await fs.copyFile(src, dest);
}

async function makeSureDirExists(dir){
    let success = false;
    try{
        const stat = await fs.lstat(dir);
        success = stat.isDirectory();
    }
    catch(error){
        await fs.mkdir(dir);
        success = true;
    }
    if (!success){
        throw new Error('something went terribly wrong, debug pls');
    }
}

process.chdir(__dirname);
main();
