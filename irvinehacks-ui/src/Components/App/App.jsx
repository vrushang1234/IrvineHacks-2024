import Homepage from "../Homepage/Homepage";
import Navbar from "../Navbar/Navbar";
import SignIn from "../SignIn/Signin";
import UserSignIn from "../UserSignin/UserSignin";
import Usersignup from "../Usersignup/Usersignup"

import "./style.css";
export default function App() {
  return (
    <div>
      <Navbar />
      {/* <SignIn /> */}
      {/* <Homepage /> */}
      {/* <UserSignIn /> */}
      <Usersignup />
    </div>
  );
}
