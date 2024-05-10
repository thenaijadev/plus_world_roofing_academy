import { IoClose } from "react-icons/io5"
import { Input } from "reactstrap"
import './OTPModal.css'
import { FcClock } from "react-icons/fc"
import MyButton from "../../../components/MyButton/MyButton"
import  {  ChangeEvent, useState } from "react"


const OTPModal = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''))

  function handleChange(e, index: number) {
    if (isNaN(e.target.value)) return false;
    setOtp([...otp.map((data, indx) => {
      indx === index ? e.target.value : data
    })]);
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus()
    }
  }
  
  function handleSubmit() { }
  
  return (
       <div className="otp">
      <div className="form_card">
        <form>
          <div className="cancel-icon-container">
            <IoClose className="cancel_icon" />
          </div>
          <div className="text-center welcome-text">
            <h3>OTP Verification</h3>
            <p>We emailed you a security code at kelvinmesh@gmail.com. It may take a
              moment to arrive</p>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-3 ">
            {
              otp.map((data, i) => {
                return <Input   
                  className="border-black border text-center fs-3 otp-input"  
                  value={data}
                  onChange={(e) => handleChange(e, i)}
              maxLength={1}
              type="text"
              autoComplete="off"
            />
              })
            }
          </div>
          <div className="d-flex align-items-center justify-content-center my-2 gap-2">
            <FcClock />
            <span>Expires In :</span>
            <span className="coloured-text">0:13</span>
          </div>
          <div className="d-flex flex-column mt-4 pb-3">
            <MyButton name="Join for Free" onClick={handleSubmit} />
          </div>
          <div className="text-center">
            <span>Didn’t get a code? </span>
            <span className="coloured-text">Resend</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OTPModal