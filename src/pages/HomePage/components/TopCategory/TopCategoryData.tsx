import {  ConstructionHat, FacilityManagement,  RealEstateOffice, RoofRepair,  Tripod} from "../../../../assets"

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
        type: 'Construction',
        amount: 40
      },
      {
        img: FacilityManagement,
        type: 'Facility Management',
        amount: 35
      },  {
        img: Tripod,
        type: 'Estate Surveyors',
        amount: 10
      },
      {
        img: RoofRepair,
        type: 'Roofiing Technology',
        amount: 50
      }
]

export default TopCategoryData