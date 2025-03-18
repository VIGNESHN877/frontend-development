const fs = require('fs');
const path = require('path');

// Function to recursively traverse a directory
const traverseDirectory = (dir) => { //fs.readdirSync()
    try {       //Uses fs.statSync() to check whether the item is a file or directory
        const files = fs.statSync();
        
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                console.log(`📁 Directory: ${filePath}`);
                traverseDirectory(filePath); // Recursively traverse subdirectories
            } else {
                console.log(`📄 File: ${filePath}`);
            }
        });
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error.message);
    }
}; //Use fs (File System) and path modules.

// Start traversal from the specified directory (modify path as needed)
const directoryPath = './test_folder'; // Change this to the desired directory
console.log(`Starting traversal of: ${directoryPath}`);
traverseDirectory(directoryPath);
