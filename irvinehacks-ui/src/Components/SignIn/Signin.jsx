import "./style.css";
import ProfilePic from "../../Images/Profilepic.svg";
export default function SignIn() {
  return (
    <div id="signin">
      <div id="signin-container">
        <img id="profile" src={ProfilePic} />
        <button className="signin button">Sign In</button>
        <button className="signup button">Sign Up</button>
      </div>
    </div>
  );
}
