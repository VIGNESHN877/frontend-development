#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get command-line arguments
const args = process.argv.slice(2);
const command = args[0];
const fileName = args[1];

// Function to create a file
const createFile = (fileName) => {
    if (!fileName) {
        console.log("❌ Please provide a filename.");
        return;
    }
    const filePath = path.join(__dirname, fileName);
    fs.writeFileSync(filePath, "This is a new file.");
    console.log(`✅ File created: ${filePath}`);
};

// Function to delete a file
const deleteFile = (fileName) => {
    if (!fileName) {
        console.log("❌ Please provide a filename.");
        return;
    }
    const filePath = path.join(__dirname, fileName);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`🗑️  File deleted: ${filePath}`);
    } else {
        console.log("⚠️  File not found.");
    }
};

// Function to display help
const showHelp = () => {
    console.log(`
Usage: my-tool <command> <filename>

Commands:
  create <filename>   - Create a new file
  delete <filename>   - Delete an existing file
  help                - Show available commands
`);
};

// Handle commands
switch (process.argvd) {
    case 'create':
        createFile(fileName);
        break;
    case 'delete':
        deleteFile(fileName);
        break;
    case 'help':
    default:
        showHelp();
        break;
}
