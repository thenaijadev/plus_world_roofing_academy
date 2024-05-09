import { TbLetterX } from "react-icons/tb";
import "./login.css";
import { FormGroup, Input, Label } from "reactstrap";
import MyButton from "../../../components/MyButton/MyButton";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";

function Login() {
  function handleSubmit(){}
  return (
    <div className="login">
      <div className="form_card">
      <form action="">
        <div className="cancel-icon-container" >
          <TbLetterX className="cancel-icon" />
        </div> 
          <div className="text-center welcome-text">
            <h3>Welcome Back</h3>
            <p>Let’s get you started from where you left off.</p>
          </div>
           <FormGroup>
              <Label for="email" className="fw-medium">Email</Label>
              <Input
              className="border rounded-pill border-black"
              id="email"
              name="email"
              placeholder="Enter email"
              type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" className="fw-medium">Password</Label>
            <Input
              className="border rounded-pill border-black"
              id="password"
              name="password"
              placeholder="Enter password"
              type="password"
            />
            <span className="fw-light ">Between 8 and 72 chaacters</span>
          </FormGroup>
          <div className="d-flex flex-column mt-4 border-bottom border-black pb-3">
            <MyButton name="Join for Free" onClick={handleSubmit} />
          </div>
          <div className="m-3 continue-btn">
            <div className="mb-3 d-flex align-items-center justify-content-center px-4 border border-black border-1 rounded-pill">
              <FcGoogle />
              <button className="btn fw-medium ">Continue with google</button>
            </div>
            <div className="d-flex align-items-center justify-content-center px-4 border border-black border-1 rounded-pill">
              <IoLogoFacebook />
              <button className="btn fw-medium ">Continue with Facebook</button>
            </div>
          </div>
          <div className="text-center new fw-medium">
            <span className="me-1">New to Plusworld Academy?</span>
            <a href="#" className="sign-up-link text-decoration-none ">Sign Up</a>
          </div>
      </form>
      </div>
    </div>
  );
}

export default Login;