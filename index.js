const fs = require("fs");
const path = require("path");

function checkContent(arr1, arr2) {
  arr1.forEach((element) => {
    if (!arr2.includes(element)) {
      return false;
    }
  });
  return true;
}

const dirPath = path.join(__dirname, "dirTest");

console.log("Now monitor:  ( ", dirPath, " )\n");

let oldFiles = fs.readdirSync(dirPath);

const changedFiles = new Set();

fs.watch(dirPath, (eventType, filename) => {
  let currentFiles = fs.readdirSync(dirPath);

  if (filename) {
    time = new Date().toLocaleTimeString();

    if (eventType === "rename") {
      let numOfOldFiles = oldFiles.length;
      let numOfCurrentFiles = currentFiles.length;

      if (numOfCurrentFiles > numOfOldFiles) {
        console.log(`➕ add file at ${time}`);
        console.log(`The added file is: "${filename}"`);
        console.log("------------------------------------------------");
        oldFiles = currentFiles;
      } else if (numOfCurrentFiles < numOfOldFiles) {
        console.log(`❌ delete file at ${time}`);
        console.log(`The deleted file is: "${filename}"`);
        console.log("------------------------------------------------");
        oldFiles = currentFiles;
      } else {
        if (!oldFiles.includes(filename)) {
          let newName = filename;
          let oldSet = new Set(oldFiles);
          let newSet = new Set(currentFiles);
          let oldName;
          oldSet.forEach((element) => {
            if (!newSet.has(element)) {
              oldName = element;
            }
          });

          console.log(`✒️ rename the file "${oldName}" at ${time}`);
          console.log(`the new name is "${newName}"`);
          console.log("------------------------------------------------");

          changedFiles.add(filename);
          oldFiles = currentFiles;
        }
      }
    } else {
      if (!changedFiles.has(filename)) {
        if (checkContent(oldFiles, currentFiles)) {
          console.log(`📝 modify file at ${time}`);
          console.log(`the modified file is "${filename}"`);
          console.log("------------------------------------------------");
        }
        changedFiles.add(filename);
      }
      setTimeout(() => {
        changedFiles.delete(filename);
      }, 100);
    }
  }
});
