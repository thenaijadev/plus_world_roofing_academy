import {  ConstructionHat, FacilityManagement,  RealEstateOffice, RoofRepair,  Tripod} from "../../../../assets"

interface TopCategoryDataTypes {
    img: string;
    type: string;
    amount: number;
    subCategory: object;
}
  const TopCategoryData : TopCategoryDataTypes[]  = [
    {
      img: RealEstateOffice,
      type: 'Real Estate',
      amount: 22,
      subCategory: {
        img: Tripod,
        type: 'Estate Surveyors',
        amount: 10, 
      }
    },
    // {
    //     img: ConstructionHat,
    //     type: 'Construction',
    //     amount: 40,
    //     subCategory: {

    //     }
    //   },
      {
        img: FacilityManagement,
        type: 'Facility Management',
        amount: 35,
        subCategory: {
            
        }
      },  {
        img: ConstructionHat,
        type: 'Construction Business',
        amount: 10, 
        subCategory: {

        }
      },
      {
        img: RoofRepair,
        type: 'Roofing Technology',
        amount: 50,
        subCategory: {

        }
      }
]

export default TopCategoryData