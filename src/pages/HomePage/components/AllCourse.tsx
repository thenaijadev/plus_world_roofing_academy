import ArrowForwardCircular from '../../../components/ArrowForwardCircular/ArrowForwardCircular'
import ArrowLeftCircular from '../../../components/ArrowLeftCircular/ArrowLeftCircular'
import CourseCard from '../../../components/CourseCard/CourseCard'

const AllCourse = () => {
  return (
    <div className="d-flex justify-content-around align-items-center gap-3 mb-5 m-auto">
      <div><ArrowLeftCircular/></div>
      <CourseCard title="Learning Roofing from Imagination" author="By Kelvin Mesh" amount="N15,000" review="(4.8 Reviews)"/>
      <CourseCard title="Learning Roofing from Imagination" author="By Kelvin Mesh" amount="N15,000" review="(4.8 Reviews)"/>
      <CourseCard title="Learning Roofing from Imagination" author="By Kelvin Mesh" amount="N15,000" review="(4.8 Reviews)"/>
      <CourseCard title="Learning Roofing from Imagination" author="By Kelvin Mesh" amount="N15,000" review="(4.8 Reviews)"/>
      <div><ArrowForwardCircular/></div>
    </div>
  )
}

export default AllCourse