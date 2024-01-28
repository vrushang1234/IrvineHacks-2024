import "./style.css";
import { Editor } from "@monaco-editor/react";
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import questions from "../../Questions/questions";
let fnc = "";
let socket = io.connect("http://localhost:3010/", {
  reconnection: false,
});
const qno = Math.floor(Math.random() * 3);
socket.on("connect", function () {
  console.log("Connected to server");
  socket.emit("data", "data is emitted !");
});
let question = questions.questions[qno];
switch (qno) {
  case 0:
    fnc = "def reverse_bits(n):\n";
    break;
  case 1:
    fnc = "def longest_palindrome(s):\n";
    break;
  case 2:
    fnc = "def sort(a):\n";
    break;
}
export default function IDE() {
  useEffect(() => {
    console.log("recieved message");
    socket.on("output", (data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.output);
      }
    });
    socket.on("error", (data) => {
      setconsolemessage(data);
    });
    socket.on("success", (data) => {
      setconsolemessage(data);
    });
  }, [socket]);
  const editorRef = useRef(null);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function showValue() {
    socket.emit("run_code", {
      message: editorRef.current.getValue(),
      qno: qno,
    });
  }
  let [consolemessage, setconsolemessage] = useState();
  return (
    <div id="IDE">
      <div id="players-container">
        <div className="player">
          <div className="player-pfp pfp1"></div>
          <h3 style={{ textAlign: "center", marginTop: "3px" }}>
            Vrushang Anand
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button id="run" onClick={showValue}>
            Run
          </button>
          <button id="submit">Submit</button>
        </div>
        <div className="player">
          <div className="player-pfp pfp2"></div>
          <h3 style={{ textAlign: "center", marginTop: "3px" }}>Noob</h3>
        </div>
      </div>
      <div id="editor">
        <div id="question" style={{ color: "#BB86FC" }}>
          <h1>{question.head}</h1>
          <br />
          <p>{question.body}</p>
          <br />
          <span style={{ color: "white", fontWeight: "700" }}>Example 1</span>
          <p>
            <br />
            <span style={{ color: "white", fontWeight: "700" }}>Input:</span>
            &nbsp;
            {question.ex1.input}
            <br />
            <br />
            <span style={{ color: "white", fontWeight: "700" }}>Output:</span>
            &nbsp;{question.ex1.output}
            <br />
            <br />
            <span style={{ color: "white", fontWeight: "700" }}>
              Explanation:
            </span>{" "}
            &nbsp;{question.ex1.explanation}
          </p>
          <br />
          <br />
          <br />
          <span style={{ color: "white", fontWeight: "700" }}>Example 2</span>
          <p>
            <br />
            <span style={{ color: "white", fontWeight: "700" }}>Input:</span>
            &nbsp;{question.ex2.input}
            <br />
            <br />
            <span style={{ color: "white", fontWeight: "700" }}>Output:</span>
            &nbsp;{question.ex2.output}
            <br />
            <br />
            <span style={{ color: "white", fontWeight: "700" }}>
              Explanation:
            </span>{" "}
            &nbsp;{question.ex2.explanation}
          </p>
        </div>
        <div id="code-test">
          <div id="code">
            <Editor
              theme="vs-dark"
              defaultLanguage="python"
              value={fnc}
              options={{
                fontSize: "18px",
              }}
              onMount={handleEditorDidMount}
            />
          </div>
          <div id="console">
            <h2 style={{ color: "white" }}>Result</h2>
            <p style={{ color: "white" }}>{consolemessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
