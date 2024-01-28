import "./style.css";

export default function UserSignIn() {
  return (  
    <div id = "parent" style = {{backgroundColor: "#010409", height: "calc(100vh - 80px)", fontWeight: "bolder", fontSize:"25px"}}>
    <div id="signin">
      <div id="signin-container">
        <h2>Sign In here</h2>
        <input type="email" className="inputtext" id="email" placeholder="Email ID" />
        <input type="password" className="inputtext" id="password" placeholder="Password" />
      </div>
    </div>
    </div>
  );
}