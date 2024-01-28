import "./style.css";

export default function Homepage() {
  return (
    <div class = "parent">
        <div className = "left-container">
          <div style={{backgroundColor: "#010409", height: "calc(100vh - 80px)", fontWeight: "bolder", fontSize:"25px"}}>
            <h1 style={{marginTop:"100px", color: "white"}}>Welcome, Username!</h1>
            <h2 style = {{marginTop:"30px", color: "white", marginLeft: "50px", fontSize: "35px"}}>Available practice topics</h2>

            <div class="TopicContainer" style= {{marginLeft: "50px", marginTop: "10px"}}>
              <div class="Topic Algorithms">Algorithms</div>
              <div class="Topic Ai">Artificial Intelligence</div>
              <div class="Topic Python">Python</div>
              <div class="Topic Fp">Functional Programming</div>
              <div class="Topic Sql">SQL</div>
              <div class="Topic Java">Java</div>
              <div class="Topic Cpp">C++</div>
              <div class="Topic Db">Databases</div>
            </div>

            <button class = "FindOpponent">Find an opponent</button>
          </div>
        </div>

      <div className = "right-container">
        <div style={{backgroundColor: "#22252C", height: "100vh", fontWeight: "bolder", fontSize:"25px"}}>
          <div className="YourStats" style={{marginTop: "100px", color: 'white', fontSize: 40, fontWeight: '700', wordWrap: 'break-word'}}>Your Stats</div>
            
            <div id="purple-square">
              <div id="text">Score</div>
            </div>

          <>
          <p className = "right-stuff" style = {{color: "white"}}>Games Played:</p>
          <p className = "right-stuff" style = {{color: "white"}}>Games Won:</p>
          </>

        </div>
      </div>
    </div>
  );
}
