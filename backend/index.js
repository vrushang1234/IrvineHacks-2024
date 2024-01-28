const http = require("http");
const app = require("express")();
const { Server } = require("socket.io");
const cors = require("cors");
const exec = require("child-process-promise").exec;
var compiler = require("compilex");
const { totalmem } = require("os");
var options = { stats: true };
compiler.init(options);
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

server.listen(3010, () => {
  console.log("Server started on 3010");
});

io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("run_code", (code) => {
    var envData = { OS: "windows" };
    var envData = { OS: "linux" };
    compiler.compilePython(envData, code.message, function (data) {
      socket.emit("output", data);
    });
    let pythonFile;
    console.log(code.qno);
    switch (code.qno) {
      case 0:
        pythonFile = "bits_reverse.py";
        break;
      case 1:
        pythonFile = "palindrome.py";
        break;
      case 2:
        pythonFile = "merge_sort.py";
    }
    let starttime = performance.now();
    exec(`python ${pythonFile}`)
      .then((result) => {
        socket.emit("success", result.stdout);
        let totaltime = performance.now() - starttime;
      })
      .catch((error) => {
        console.error("Error executing Python script:", error.stderr);
        socket.emit("error", error.stderr);
      });
  });
});
