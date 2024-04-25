import {
  Facebook,
  Instagram,
  LinkedIn,
  Logo,
  Twitter,
  YouTube,
} from "../../assets";
import SocialIcon from "../SocialIcon/SocialIcon";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="py-2">
        <div className="d-flex justify-content-around pt-5 pb-3 align-items-start  border-bottom mx-5 border-2">
          <div className="d-flex flex-column gap-4 address">
            <img src={Logo} alt="logo" className="logo" />
            <p className="mb-0 fw-medium">
              Plusworld Academy LMS <br />
              +2348126708162 20 Ojomo royal <br /> plaza, Lekki-Epe{" "}
            </p>
            <p className="fw-medium">
              academy@plusworldroofing.com.ng <br />
              Expressway, Lagos-Nigeria.
            </p>
            <div className="d-flex align-items-center justify-content-between ms-0">
              <SocialIcon
                link="https://www.instagram.com/plusworldacademy?igsh=am43cWxzbnoxdnpy"
                image={Instagram}
              />
              <SocialIcon link="" image={Twitter} />
              <SocialIcon
                link="https://www.linkedin.com/company/plusworld-roofing-academy/"
                image={LinkedIn}
              />
              <SocialIcon link="" image={Facebook} />
              <SocialIcon link="" image={YouTube} />
            </div>
          </div>
          <div className="align-items-start">
            <h5>Useful Links</h5>
            <hr />
            <ul className="ps-0">
              <li className="mb-2 fw-medium">Careers</li>
              <li className="mb-2 fw-medium">Blog</li>
              <li className="mb-2 fw-medium">Help & Support</li>
              <li className="fw-medium">Privacy policy</li>
            </ul>
          </div>
          <div>
            <h5>Our Company</h5>
            <hr />
            <ul className="ps-0">
              <li className="mb-2 fw-medium">Contact Us</li>
              <li className="mb-2 fw-medium">Be a Tutor</li>
              <li className="fw-medium">Careers</li>
            </ul>
          </div>
          <div className="subscribe">
            <h5>Subscribe</h5>
            <hr />
            <form action="">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control px-4 py-2 border-0 mb-1 rounded-pill"
                  id="emailAddress"
                  placeholder="Enter your email address"
                />
              </div>
              <button type="button" className="btn rounded-pill">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        <div className="text-center pt-4">
          <p>© 2023 Plusworldroofingacademy.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
