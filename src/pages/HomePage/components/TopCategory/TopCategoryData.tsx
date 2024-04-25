import {  ConstructionHat, FacilityManagement,  RealEstateOffice, RoofRepair} from "../../../../assets"

interface TopCategoryDataTypes {
    img: string;
    type: string;
    amount: number;
}
  const TopCategoryData : TopCategoryDataTypes[]  = [
    {
      img: RealEstateOffice,
      type: 'Real Estate',
      amount: 22
    },
    {
        img: ConstructionHat,
        type: 'Construction Business',
        amount: 40
      },
      {
        img: FacilityManagement,
        type: 'Facility Management',
        amount: 35
      },
      {
        img: RoofRepair,
        type: 'Roofing Technology',
        amount: 50
      }
]

export default TopCategoryData