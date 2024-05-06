import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "reactstrap";
import {
  ArrowDown,
  CartIcon,
  CategoryIcon,
  FavouriteIcon,
  Logo,
  SearchIcon,
} from "../../assets";
import MyButton from "../MyButton/MyButton";
import "./Header.css";
import { GlobalContext } from "../../GlobalProvider";

const Header = () => {
  const { setTutorFormDisplay, tutorFormDisplay} = useContext(GlobalContext);
 
  function handleTutorForm(){
    if(tutorFormDisplay){
      setTutorFormDisplay(false)
    }
    else{
      setTutorFormDisplay(true)
    }
  }

  return (
    <nav className="d-flex nav px-5 py-3 justify-content-between gap-5 align-items-center">
        <img src={Logo} alt="logo" />
      <div className="menu_list">
        <div className="d-flex align-items-center">
          <ul className="d-flex align-items-center gap-4 mb-0">
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
          <p className="fw-bold mb-0 tutor-button" onClick={handleTutorForm}>Be a Tutor</p>
          <div className="d-flex gap-2">
            <div className=" p-2 rounded-circle d-flex align-items-center justify-content-center border-black border">
              <img src={FavouriteIcon} alt="favourite icon" />
            </div>
            <div className=" p-2 rounded-circle d-flex align-items-center justify-content-center border-black border">
              <img src={CartIcon} alt="favourite icon" />
            </div>
          </div>
        
            <NavLink className="fw-bold " to="login">
        
              <MyButton name="Login" />
            </NavLink>
        
        </div>
      </div>
    </nav>
  );
};

export default Header;
