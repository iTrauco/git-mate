function push(){
    const { execSync } = require('child_process');

    // Adding the folder and commiting it
    
    let execCommand = 'git add . && git commit -m "' + process.argv[3] + '"';
    execSync(execCommand, (err, stdout, stderr) => {
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

exports.push = push;