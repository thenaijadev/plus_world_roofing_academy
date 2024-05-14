import {  ConstructionHat, FacilityManagement,  RealEstateOffice, RoofRepair} from "../../../../assets"

interface TopCategoryDataTypes {
  id: number;
    img: string;
    type: string;
    amount: number;
    link: string;
}
  const TopCategoryData : TopCategoryDataTypes[]  = [
    {
      id: 223458,
      img: RealEstateOffice,
      type: 'Real Estate',
      amount: 22,
      link: 'coming-soon'
    },
    {
      id: 85656,
        img: ConstructionHat,
        type: 'Construction Business',
        amount: 40,
        link: 'coming-soon'
      },
      {
        id: 39058,
        img: FacilityManagement,
        type: 'Facility Management',
        amount: 35,
        link: 'coming-soon'

      },
      {
        id: 3484,
        img: RoofRepair,
        type: 'Roofing Technology',
        amount: 50,
        link: ''

      }
]

export default TopCategoryData