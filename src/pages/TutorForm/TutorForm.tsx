import { useContext } from "react";
import "./TutorForm.css";
import { TbLetterX } from "react-icons/tb";
import { GlobalContext } from "../../GlobalProvider";


const TutorForm = () => {
    const { setTutorFormDisplay, tutorFormDisplay} = useContext(GlobalContext);

    function handleTutorForm(){
        if(tutorFormDisplay){
          setTutorFormDisplay(false)
        }
        else{
          setTutorFormDisplay(true)
        }
      }

return(
    <div className="tutor-form-container">
        <form className="tutor-form"> 
        <div className="cancel-icon-container" >
                 <TbLetterX className="cancel-icon" onClick={handleTutorForm}/>
            </div> 
              <h3>Enter Your details</h3>
              <p className="learn">Teach what you know to thousand of students</p>
        <div className="input-field">
            <label>Full name</label><br/>
            <input type="text" name="full-name" placeholder="Enter full name"/>
        </div>
        <div className="input-field">
            <label>Phone Number</label><br/>
            <input type="phone" name="phone-number" placeholder="Enter full name"/>
        </div>
        <div className="input-field">
            <label>Email</label><br/>
            <input type="email" name="email" placeholder="Enter full name"/>
        </div>

        <div className="input-field">
            <label>What do you want to teach?</label><br/>
            <select name="categories" title="categories">
                <option>Roofing Technology</option>
                <option>Construction</option>
                <option>Facility Management</option>
                <option>Real Estate</option>
                <option>Construction Business and Project management</option>
            </select>
        </div>
        <div className="input-field">
            <label>Years of experience</label><br/>
            <input type="number" placeholder="0"/>
        </div>
        <button>Submit</button>
        </form>
    </div>
)
}

export default TutorForm