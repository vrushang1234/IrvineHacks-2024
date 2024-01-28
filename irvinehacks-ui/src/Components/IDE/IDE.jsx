import "./style.css";
import { Editor } from "@monaco-editor/react";
import { useRef } from "react";
const io = require("socket.io-client");
let socket = io.connect("http://localhost:3001/", {
  reconnection: false,
});
socket.on("connect", function () {
  console.log("Connected to server");
  socket.emit("data", "data is emitted !");
});
export default function IDE() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function showValue() {
    console.log(editorRef.current.getValue());
  }
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
        <div id="question">
          <h1 style={{ color: "#BB86FC" }}>1. Two Sum</h1>
          <br />
          <p style={{ color: "#BB86FC" }}>
            Given an array of integers nums and an integer target, return
            indices of the two numbers such that they add up to target. You may
            assume that each input would have exactly one solution, and you may
            not use the same element twice. You can return the answer in any
            order.
          </p>
        </div>
        <div id="code-test">
          <div id="code">
            <Editor
              theme="vs-dark"
              defaultLanguage="python"
              value="#Start programming here"
              options={{
                fontSize: "18px",
              }}
              onMount={handleEditorDidMount}
            />
          </div>
          <div id="test">
            <Editor
              theme="vs-dark"
              value="#Add your testcases here"
              options={{
                fontSize: "18px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
