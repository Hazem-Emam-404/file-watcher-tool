Project: Directory Monitor
This project is a simple directory monitoring tool built using Node.js. It watches a specified directory for changes and logs any file additions, deletions, renames, or modifications to the console. The tool uses the fs and path modules from Node.js to interact with the file system and monitor changes in real-time.

📂 How It Works
Initialization:

The script starts by defining the directory to monitor (dirPath), which is set to a folder named dirTest located in the same directory as the script.

It reads the initial list of files in the directory and stores them in the oldFiles array.

Monitoring:

The fs.watch method is used to monitor the directory for changes.

When a change is detected, the script checks the type of change (eventType) and the affected file (filename).

Change Detection:

File Addition (➕):

If the number of files in the directory increases, the script logs that a file has been added.

File Deletion (❌):

If the number of files in the directory decreases, the script logs that a file has been deleted.

File Rename (✒️):

If the number of files remains the same but a file name changes, the script logs the old and new file names.

File Modification (📝):

If a file is modified (content changed), the script logs the modification.

Logging:

Each change is logged with a timestamp and a description of the change.

Emojis are used to make the logs more visually appealing and easier to understand.

🛠️ Code Explanation
checkContent(arr1, arr2):

A helper function that checks if all elements in arr1 are present in arr2. This is used to detect file modifications.

fs.watch(dirPath, (eventType, filename) => { ... }):

The main function that monitors the directory for changes.

It handles different types of events (rename for additions, deletions, and renames, and change for modifications).

changedFiles Set:

A set is used to keep track of files that have been modified recently to avoid duplicate logs.

🚀 How to Use
Clone the Repository:

bash
Copy
git clone https://github.com/your-username/directory-monitor.git
cd directory-monitor
Install Dependencies:

This project does not require any external dependencies.

Run the Script:

bash
Copy
node index.js
Monitor the Directory:

Add, delete, rename, or modify files in the dirTest directory.

Observe the changes being logged in real-time in the console.

📝 Example Output
Copy
Now monitor:  (  /path/to/dirTest  )

➕ add file at 14:35:22
The added file is: "newfile.txt"
------------------------------------------------
❌ delete file at 14:36:10
The deleted file is: "oldfile.txt"
------------------------------------------------
✒️ rename the file "oldname.txt" at 14:37:45
the new name is "newname.txt"
------------------------------------------------
📝 modify file at 14:38:30
the modified file is "example.txt"
------------------------------------------------
📂 Directory Structure
Copy
directory-monitor/
├── dirTest/                  # Directory being monitored
├── index.js                  # Main script
├── README.md                 # This README file
📜 License
This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it as needed.

🎉 Contributing
Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

📧 Contact
For any questions or feedback, feel free to reach out to your-email@example.com.

Enjoy monitoring your directories with ease! 🚀
