const fs = require('fs');
const path = require('path');

// Get file path from command-line arguments
const filePath = process.argv[2];

if (!filePath) {
    console.error("Please provide a file path as an argument.");
    process.exit(1);
}

// Resolve the absolute path
const absolutePath = path.resolve(filePath);

// Check if the file exists
if (!fs.existsSync(absolutePath)) {
    console.error("File does not exist.");
    process.exit(1);
}

// Get file statistics
fs.stat(absolutePath, (err, stats) => {
    if (err) {
        console.error("Error retrieving file stats:", err.message);
        process.exit(1);
    }

    console.log("File Statistics:");
    console.log("File Path:", absolutePath);
    console.log("Size:", stats.size, "bytes");
    console.log("Creation Date:", stats.birthtime);
    console.log("Last Modified Date:", stats.mtime);
});