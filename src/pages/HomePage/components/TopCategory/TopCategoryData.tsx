import {  ConstructionHat, FacilityManagement,  RealEstateOffice, RoofRepair} from "../../../../assets"

interface TopCategoryDataTypes {
    img: string;
    type: string;
    amount: number;
    link: string;
}
  const TopCategoryData : TopCategoryDataTypes[]  = [
    {
      img: RealEstateOffice,
      type: 'Real Estate',
      amount: 22,
      link: 'coming-soon'
    },
    {
        img: ConstructionHat,
        type: 'Construction Business',
        amount: 40,
        link: 'coming-soon'
      },
      {
        img: FacilityManagement,
        type: 'Facility Management',
        amount: 35,
        link: 'coming-soon'

      },
      {
        img: RoofRepair,
        type: 'Roofing Technology',
        amount: 50,
        link: ''

      }
]

export default TopCategoryData