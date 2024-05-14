import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "reactstrap";
import {
  ArrowDown,
  CartIcon,
  CategoryIcon,
  FavouriteIcon,
  Logo,
  Menu,
  SearchIcon,
} from "../../assets";
import { GlobalContext } from "../../GlobalProvider";
import MyButton from "../MyButton/MyButton";
import "./Header.css";

const Header = () => {
  const { setTutorFormDisplay, tutorFormDisplay } = useContext(GlobalContext);
  const { setLoginFormDisplay, loginFormDisplay } = useContext(GlobalContext);

  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    setIsOpen(!isOpen);
  };

  function handleTutorForm() {
    if (tutorFormDisplay) {
      setTutorFormDisplay(false);
    } else {
      setTutorFormDisplay(true);
    }
  }

  function handleLoginFormDisplay() {
    if (loginFormDisplay) {
      setLoginFormDisplay(false);
    } else {
      setLoginFormDisplay(true);
    }
  }
  return (
    <>
      <nav className="d-flex nav px-5 py-3 justify-content-between align-items-center">
        <img src={Logo} alt="logo" />
        
        <div className="d-none hamburger_menu p-1 ">
          <button onClick={showNavbar}>
            <img src={Menu} alt="menu icon" />
          </button>
        </div>

        <div className="menu_list d-flex justify-content-between gap-5 align-items-center">
          <div className="d-flex align-items-center">
            <ul className="d-flex align-items-center w-100 gap-4 mb-0">
              <li className="">
                <NavLink className="fw-bold" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="fw-bold" to="courses">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink className="fw-bold" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="d-flex gap-2 align-items-center ">
            <div className="d-flex align-items-center border-black border rounded-pill ps-3 pe-1 py-1">
              <div className="d-flex gap-2 align-items-center border-end px-2 border-black border-2 fw-bold">
                <img src={CategoryIcon} alt="category" />
                <p className="mb-0">Category</p>
                <img src={ArrowDown} alt="down arrow" />
              </div>
              <Input placeholder="Search For Course, teachers" />
              <div className="badge_icon p-2 rounded-circle d-flex align-items-center justify-content-center border-black border">
                <img src={SearchIcon} alt="favourite icon" />
              </div>
            </div>
            <p className="fw-bold mb-0 tutor-button" onClick={handleTutorForm}>
              Be a Tutor
            </p>
            <div className="d-flex gap-2">
              <div className=" p-2 rounded-circle d-flex align-items-center justify-content-center border-black border">
                <img src={FavouriteIcon} alt="favourite icon" />
              </div>
              <div className=" p-2 rounded-circle d-flex align-items-center justify-content-center border-black border">
                <img src={CartIcon} alt="favourite icon" />
              </div>
            </div>
            <MyButton onClick={handleLoginFormDisplay} name="Login" />
          </div>
        </div>
      </nav>
      {isOpen && (<nav  className={`${isOpen ? 'show-menu' : ''} "nav-mobile z-3 nav-mobile-display bg-white w-50 position-relative"`}>
            <div className="position-absolute z-2 px-3 py-4  w-75 gap-4 d-flex flex-column align-items-start bg-white">
              <ul className="d-flex ps-0 flex-column align-items-center gap-4 mb-0">
                <li>
                  <NavLink className="fw-bold" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="fw-bold" to="courses">
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink className="fw-bold" to="contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
                      <p className="fw-bold mb-0 tutor-button" onClick={handleTutorForm}>
                Be a Tutor
              </p>
              <div className="d-flex gap-2">
                <div className=" p-2 rounded-circle d-flex align-items-center justify-content-center border-black border">
                  <img src={FavouriteIcon} alt="favourite icon" />
                </div>
                <div className=" p-2 rounded-circle d-flex align-items-center justify-content-center border-black border">
                  <img src={CartIcon} alt="favourite icon" />
                </div>
              </div>
              <MyButton onClick={handleLoginFormDisplay} name="Login" />
            </div>
        </nav>)}
      
      
    </>
  );
};

export default Header;
