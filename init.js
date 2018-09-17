function init(){
    const { execSync } = require('child_process');

    // Initializing the folder
    execSync('git init', (err, stdout, stderr) => {
        if(err){
            console.error(`execSync error: ${err}`);
            return;
        }
        console.log("Init");
    });

    // Adding remote
    let urlString = 'git remote add origin '.concat(process.argv[3]);
    execSync(urlString, (err, stdout, stderr) => {
        if(err){
            console.error(`execSync error: ${err}`);
            return;
        }
        console.log("Add origin");
    });

    // First commit
    execSync('git add . && git commit -m "First commit"', (err, stdout, stderr) => {
        if(err){
            console.error(`execSync error: ${err}`);
            return;
        }
        console.log("Add and commit");
    });

    // Pushing the code
    execSync('git push -u origin master', (err, stdout, stderr) => {
        if(err){
            console.error(`execSync error: ${err}`);
            return;
        }
        console.log("Push");
    });
}

exports.init = init;