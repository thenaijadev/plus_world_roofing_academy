import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FormGroup, Input, Label } from "reactstrap";
import MyButton from "../../../components/MyButton/MyButton";
import "./SignUp.css";
import OTPModal from "../OTP/OTPModal";

const Signup = () => {
  const [isOTP, setIsOTP] = useState<boolean>(false);

  function handleSubmit() {
    setIsOTP(true);
  }

  return !isOTP ? (
    <div className="sign-up">
      <div className="form_card">
        <form action="">
          <div className="cancel-icon-container">
            <IoClose className="cancel_icon" />
          </div>
          <div className="text-center welcome-text">
            <h3>Sign up</h3>
            <p>Learn on your own time from top instructors and schools</p>
          </div>
          <FormGroup>
            <Label for="full-name" className="fw-medium">
              Full name
            </Label>
            <Input
              className="border rounded-pill border-black"
              id="full-name"
              name="full-name"
              placeholder="Enter full name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="fw-medium">
              Email
            </Label>
            <Input
              className="border rounded-pill border-black"
              id="email"
              name="email"
              placeholder="Enter email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password" className="fw-medium">
              Password
            </Label>
            <div className="position-relative d-flex">
              <Input
                className="border rounded-pill border-black"
                id="password"
                name="password"
                placeholder="Enter password"
                type="password"
              />
              <FaEyeSlash className="position-absolute me-3 eye-icon" />
            </div>
            <span className="fw-light ">Between 8 and 72 chaacters</span>
          </FormGroup>
          <div className="d-flex flex-column mt-4 pb-3">
            <MyButton name="Join for Free" onClick={handleSubmit} />
          </div>
          <div className="d-flex align-items-center justify-content-center px-3">
            <div className="border-top border-black w-50 col-5"></div>
            <div className="col-1 text-center">
              <span>or</span>
            </div>
            <div className="border-top border-black w-50 col-5"></div>
          </div>
          <div className="mt-3 continue-btn d-flex flex-column">
            <div className="mb-3 d-flex align-items-center  py-2 px-4 border border-black border-1 rounded-pill">
              <div>
                <FcGoogle />
              </div>
              <button className="btn fw-medium w-100  py-0">
                Continue with google
              </button>
            </div>
            <div className="d-flex align-items-center  px-4 py-2 border border-black border-1 rounded-pill">
              <div>
                <IoLogoFacebook />
              </div>
              <button className="btn fw-medium w-100 py-0">
                Continue with Facebook
              </button>
            </div>
          </div>
          <div className="text-center new fw-medium mb-4 pb-2 border-bottom border-black">
            <span className="me-1">Already on Plusworld Academy?</span>
            <button className="sign-up-link border-0 bg-white text-decoration-none ">
              Login
            </button>
          </div>
          <div className="text-center mb-3 terms">
            <span className="d-block">
              I accept Plus world Academy <a href="#">Terms of Use</a> and{" "}
              <a href="#">Privacy Notice</a>.
            </span>
            <span className="d-block">
              {" "}
              Having trouble logging in? <a href="#">Learner help center</a>
            </span>
            <span className="d-block">
              This site is protected by reCAPTCHA Enterprise and the Google{" "}
              <a href="#">Privacy Policy</a> and{" "}
              <a href="#">Terms of Service apply</a>.
            </span>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <OTPModal/>
  );
};

export default Signup;
