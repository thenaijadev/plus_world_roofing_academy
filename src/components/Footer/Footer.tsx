import { Logo } from '../../assets'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer '>
        <div className='py-2'>
            <div className='d-flex justify-content-around pt-5 pb-3 align-items-start  border-bottom mx-5 border-2'>
                <div className='d-flex flex-column gap-4'>
                    <img src={Logo} alt="logo" />
                    <p className='mb-0'>Plusworld Academy LMS <br />+2348126708162 20 Ojomo royal <br /> plaza, Lekki-Epe </p>
                    <p>plusworldacademy@gmail.com <br />Expressway, Lagos-Nigeria.</p>
                </div>
                <div className='align-items-start'>
                    <h4>Useful Links</h4>
                    <hr />
                    <ul className='ps-0'>
                        <li className='mb-2'>Careers</li>
                        <li className='mb-2'>Blog</li>
                        <li className='mb-2'>Help & Support</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <h4>Our Company</h4>
                    <hr />
                    <ul className='ps-0'>
                        <li className='mb-2'>Contact Us</li>
                        <li className='mb-2'>Be a Tutor</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='subscribe'>
                    <h4>Subscribe</h4>
                    <hr/>
                    <form action="">
                        <div className="mb-3">
                            <input type="email" className="form-control px-4 py-2 border-0 mb-1 rounded-pill" id="emailAddress" placeholder="Enter your email address"/>
                        </div>
                        <button type="button" className="btn  btn-lg rounded-pill">Subscribe Now</button>
                    </form>
                    
                </div>
            </div>
            <div className='text-center pt-4'>
                <p>© 2023 Plusworldroofingacademy.com. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer