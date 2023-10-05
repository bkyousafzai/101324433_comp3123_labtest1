const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    const filesToDelete = fs.readdirSync(logsDir);

    // Output file delete
    console.log('Files to delete:');
    console.log(filesToDelete);

    // Remove all files in the directory
    filesToDelete.forEach((file) => {
        const filePath = path.join(logsDir, file);
        fs.unlinkSync(filePath);
    });

    // Remove the Logs directory
    fs.rmdirSync(logsDir);

    console.log('Logs directory and files have been removed.');
} else {
    console.log('Logs directory does not exist.');
}
