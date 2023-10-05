const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}
process.chdir(logsDir);

for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const fileContent = `This is log file ${i}.`;

    fs.writeFileSync(fileName, fileContent);
}

const logFiles = fs.readdirSync(logsDir);

console.log('Created log files:');
console.log(logFiles);
