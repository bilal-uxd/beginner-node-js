const fs = require("fs");

//read files

// fs.readFile("./names.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

//write files

// fs.writeFile("./docs.txt", "hello world", () => {
//   console.log("file written");
// });

//directory

// if (!fs.existsSync("./aaa")) {
//   fs.mkdir("./aaa", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./aaa", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

//delete file

if (fs.existsSync("./names.txt")) {
  fs.unlink("./names.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
