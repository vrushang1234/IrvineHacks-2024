import "./style.css";

export default function Usersignup() {
  return (  
    <div id = "parent" style = {{backgroundColor: "#010409", height: "calc(100vh - 80px)", fontWeight: "bolder", fontSize:"25px"}}>
    <div id="signin">
      <div id="signin-container">
        <h2>Sign Up here</h2>
        <input type="name" className="inputtext" id="name" placeholder="Name" />
        <input type="email" className="inputtext" id="email" placeholder="Email ID" />
        <input type="password" className="inputtext" id="password" placeholder="Password" />
        <input type="confirm" className="inputtext" id="confirm" placeholder="confirm password" />

      </div>
    </div>
    </div>
  );
}