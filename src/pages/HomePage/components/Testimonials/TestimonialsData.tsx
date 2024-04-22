import { TestimonialImage } from "../../../../assets";


interface TestimonialTypes {
    personImg: string;
    name: string;
    reason: string;
}
  const TestimonialData : TestimonialTypes[]  = [
    {
      personImg: TestimonialImage,
      name: '—Jason R, Plusworld student',
      reason: `I come to Plusworld Roofing Academy for the  curation and class quality. That's really worth the cost of membership to me.`
    }
]

export default TestimonialData