import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Badge, Nav, NavItem, NavLink, TabContent, TabPane, } from "reactstrap"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { AMD, Amazon, ArrowFowardSmall, ArrowRight, CodeAcademy, Cognizant, ConstructionHat, Cousera, EnrolledStudent, FAQsImage, FacilityManagement, OliviaMiaAvatar, RealEstateOffice, RoofRepair, StayInformedImage, TestimonialImage, Tripod, Udemy } from "../../assets"
import './HomePage.css'
import ExpertAvatarCard from "../../components/ExpertAvatarCard/ExpertAvatarCard"
import IconButton from "../../components/IconButon/IconButton"
import { SetStateAction, useState } from "react"
import AllCourse from "./components/AllCourse"
import classnames from "classnames"
import MyBadge from "../../components/MyBadge/MyBadge"
import MyButton from "../../components/MyButton/MyButton"
import ArrowForwardCircular from "../../components/ArrowForwardCircular/ArrowForwardCircular"
import ArrowLeftCircular from "../../components/ArrowLeftCircular/ArrowLeftCircular"


const HomePage = () => {
  const [activeTab, setActiveTab] = useState('All_Courses');

    const toggle = (tab: SetStateAction<string>) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
 
    const [open, setOpen] = useState('');
  const toggleAccordion = (id: SetStateAction<string>) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Header/>
        <section className="hero p-5 ">
          <div className="hero_description w-50 ps-5">
            <h1 className="mb-4">Never Stop <span>Learning!</span> <br />Launch a new long term career with us.</h1>
            <h6 className="mb-4">Every teaching and learning journey is unique and <br /> we will help you find your way</h6>
            <IconButton title="Explore careers" image={ArrowFowardSmall}/>
          </div>
        </section>
        <section className="px-5 pt-5 my-5">
          <div className="text-center ">
            <MyBadge name="Trending Categories" />
            <h4 className=" my-3">Top Category Available</h4>
            <p>Get professional-level training and earn a credential recognized by leading companies.</p>
          </div>
          <div className="performance_metrics m-auto py-2 rounded-pill d-flex align-items-center justify-content-between mx-5 px-5">
            <ArrowLeftCircular/>
              <div className="fw-bold px-4 text-center ">
                <div className="category_icon rounded-circle p-3 mb-3">
                  <img src={RealEstateOffice} alt="real estate office" />
                </div>
                <p className="mb-0">Real Estate</p>
                <p className="mb-0">(22)</p>
              </div>
              <div className="fw-bold px-4 text-center d-flex flex-column ">
                <div className="category_icon rounded-circle p-3 mb-3">
                  <img src={ConstructionHat} alt="contruction hat" />
                </div>
                <p className="mb-0">Construction</p>
                <p className="mb-0">(40)</p>
              </div>
              <div className="fw-bold px-4 text-center ">
                <div className="category_icon rounded-circle p-4 mb-3">
                  <img src={FacilityManagement} alt="facility management" />
                </div>
                <p className="mb-0">Facility Management</p>
                <p className="mb-0">(35)</p>
              </div>
              <div className="fw-bold px-4 text-center ">
                <div className="category_icon rounded-circle p-3 mb-3">
                  <img src={Tripod} alt="tripod" />
                </div>
                <p className="mb-0">Estate Surveyors</p>
                <p className="mb-0">(10)</p>
              </div>
              <div className="fw-bold px-4 text-center  ">
                <div className="category_icon rounded-circle p-3 mb-3">
                  <img src={RoofRepair} alt="roof repair" />
                </div>
                <p className="mb-0">Roofing Technology</p>
                <p className="mb-0">(50)</p>
              </div>
              <ArrowForwardCircular/>
            </div>
        </section>
        <section>
          <div className="d-flex align-items-center justify-content-center overflow-x-hidden">
            <img src={Cousera} alt="cousera" />
            <img src={Amazon} alt="amazon" />
            <img src={CodeAcademy} alt="code academy" />
            <img src={Cognizant} alt="cognizant" />
            <img src={AMD} alt="amd logo" />
            <img src={Udemy} alt="udemy logo" />
          </div>
        </section>
        <section className="px-5 pt-5 my-5">
          <div className="d-flex align-items-center justify-content-center gap-5">
            <div className="px-3"><img src={EnrolledStudent} alt="enrolled student image" /></div>
            <div className="more_about_us px-3">
              <MyBadge name="Get More About Us"/>
              <h4 className="my-3 ">Thousand of top <span>courses</span> <br />now in one place</h4>
              <p className="mb-4">Learn creative skills to achieve your <br />personal and professional goals.</p>
              <div className="d-flex gap-3 align-items-center mb-3">
                <img src={ArrowRight} alt="arrow right" className="p-2 border-black border arrrow_right rounded-circle" />
                <p className="mb-0 fw-bold">Tune in and level up at your own pace.</p>
              </div>
              <div className="d-flex gap-3 align-items-center mb-3">
                <img src={ArrowRight} alt="arrow right" className="p-2 border-black border arrrow_right rounded-circle" />
                <p className="mb-0 fw-bold">Go from dabbler to master in a matter of hours.</p>
              </div>
              <div className="d-flex gap-3 align-items-center mb-3">
                <img src={ArrowRight} alt="arrow right" className="p-2 border-black border arrrow_right rounded-circle" />
                <p className="mb-0 fw-bold">Global community.</p>
              </div>
              <MyButton name="Explore Careers"/>
            </div>
          </div>
        </section>
        <section className="px-5 pt-5 my-5">
          <div className="text-center mb-5">
            <MyBadge name="Top Class Courses"/>
            <h4>Explore our Best Courses</h4>
            <p>Whatever your background or interests are, Professional Certificates have you covered.</p>
          </div>
           <Nav tabs className='course-tabs w-50 d-flex px-4 m-auto  my-4'>
                <NavItem className='cursor-pointer '>
                    <NavLink
                        className={classnames({ active: activeTab === 'All_Courses' })}
                        onClick={() => {
                            toggle('All_Courses');
                        }}
                    >
                        All Courses
                    </NavLink>
                </NavItem>
                <NavItem className='cursor-pointer'>
                    <NavLink
                        className={classnames({ active: activeTab === 'Real_Estate' })}
                        onClick={() => {
                            toggle('Real_Estate');
                        }}
                    >
                        Real Estate
                    </NavLink>
                </NavItem>
                <NavItem className='cursor-pointer'>
                    <NavLink
                        className={classnames({ active: activeTab === 'Construction' })}
                        onClick={() => {
                            toggle('Construction');
                        }}
                    >
                        Construction
                    </NavLink>
                </NavItem>
                <NavItem className='cursor-pointer'>
                    <NavLink
                        className={classnames({ active: activeTab === 'Roofing_Construction' })}
                        onClick={() => {
                            toggle('Roofing_Construction');
                        }}
                    >
                        Roofing Construction
                    </NavLink>
                </NavItem>
                
            </Nav>
             <TabContent activeTab={activeTab}>
                <TabPane tabId="All_Courses">
                    <AllCourse />
                </TabPane>
            </TabContent>
            

          <div >
            <div className="d-flex align-items-center justify-content-between my-5 w-75 px-3 m-auto">
              <div className="w-25">
                <Badge className="text-black mb-2" pill>Our Tutors</Badge>
                <h4 className="mb-4 fs-3">Learn from creative experts </h4>
                <p className="mb-4">classes are taught by industry leaders excited to share their tools, techniques, and professional journeys with you.</p>
                <IconButton title="See All Instructors" image={ArrowFowardSmall}/>
              </div>
              <div className="w-75 d-flex flex-wrap align-items-center justify-content-around">
                <ExpertAvatarCard avatar={OliviaMiaAvatar} name="Olivia Mia" title="Roofing Design" reviews="(4.8 Reviews)"/>
                <ExpertAvatarCard avatar={OliviaMiaAvatar} name="Olivia Mia" title="Roofing Design" reviews="(4.8 Reviews)"/>
                <ExpertAvatarCard avatar={OliviaMiaAvatar} name="Olivia Mia" title="Roofing Design" reviews="(4.8 Reviews)"/>
                <ExpertAvatarCard avatar={OliviaMiaAvatar} name="Olivia Mia" title="Roofing Design" reviews="(4.8 Reviews)"/>
              </div>
            </div>
            <div className="performance_metrics w-75 m-auto py-4 rounded-pill d-flex gap-3 align-items-center justify-content-center">
              <div className="fw-bold px-4 text-center border-end border-black">
                <h3>45K+</h3>
                <p>Active Students</p>
              </div>
              <div className="fw-bold px-4 text-center border-end border-black">
                <h3>85+</h3>
                <p>Faculty Courses</p>
              </div>
              <div className="fw-bold px-4 text-center border-end border-black">
                <h3>100K</h3>
                <p>Best Tutors</p>
              </div>
              <div className="fw-bold px-4 text-center ">
                <h3>42K</h3>
                <p>Certificates Issues</p>
              </div>
            </div>
          </div>
        </section>
        <section className=" pt-5 my-5">
          <div className="text-center">
            <h4 className="mb-3 fw-bold">Why Students Love <br />Plusworld Roofing Academy</h4>
            <p>Skillshare is here to support you on every step of your creative journey.</p>
          </div>

          <div className="testimonials z-n1  position-relative">
            <div className="d-flex align-items-center  px-5 justify-content-around z-3 position-absolute">
              <ArrowLeftCircular/>
              <div className="d-flex align-items-center">
                <div>
                  <img src={TestimonialImage} alt="testimonial image" />
                </div>
                <div>
                  <h5 className="mb-5">“I come to Plusworld Roofing Academy for the  curation and class quality. That's really worth the cost of membership to me.”</h5>
                  <p>—Jason R, Plusworld student</p>
                </div>
              </div>
              <ArrowForwardCircular/>
            </div>
          </div>
          
        </section>
        <section className="px-5 pt-5 my-5 stay_informed">
          <div className="d-flex gap-5 mx-5 px-4 align-items-center justify-content-around">
            <div>
              <img src={StayInformedImage} alt="stay informed" />
            </div>
            <div className="w-75">
              <h4 className="fs-2 mb-3">Want to stay informed about <br /> <span>new courses</span> and study?</h4>
              <form action="">
                <div className=" d-flex gap-1 ">
                  <input type="email" className="form-control px-3 w-75 border-0 rounded-pill" id="emailAddress" placeholder="Type your email"/>
                  <button type="button" className="btn  rounded-pill">Subscribe Now</button>
                </div>
              </form>
            </div>  
          </div>
        </section>
        <section className="p-5 my-5 FAQ">
           <div className="d-flex gap-5 mx-5 px-5 justify-content-around">
            <div className="w-50">
              <Badge className="text-black" pill> FAQs</Badge>
              <h4 className="fs-2 mb-4 mt-2">Start Learning From <br />World’s Pro Instructors</h4>
                  <div>
      <Accordion flush open={open} toggle={toggleAccordion}>
        <AccordionItem className="border-black">
          <AccordionHeader targetId="1">What’s Skillgrow Want to give you?</AccordionHeader>
          <AccordionBody accordionId="1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed amet, sequi similique rerum unde necessitatibus, excepturi magni, consequatur fugiat expedita distinctio? Quam accusamus vitae rem nisi esse molestiae amet laboriosam.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className="border-black">
          <AccordionHeader targetId="2">Why choose us for your education?</AccordionHeader>
        </AccordionItem>
        <AccordionItem className="border-black">
          <AccordionHeader  targetId="3">How We Provide Service For you?</AccordionHeader>
        </AccordionItem>
        <AccordionItem className="border-black border-bottom">
          <AccordionHeader  targetId="4">Are you Affordable For Your Course</AccordionHeader>
        </AccordionItem>
      </Accordion>
    </div>

              
            </div>
            <div>
              <img src={FAQsImage} alt="faq image" />
            </div>
           </div>
        </section>
        <Footer/>
    </div>
  )
}

export default HomePage