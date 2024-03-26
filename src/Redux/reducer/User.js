import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    // footerData:null,
    currLocation: { country: '90', city: 'India', code: '', location: '', locationName: null, project: '', projectName: null, area: 'City' },
    propertyListState: {
      propertyStatus: { text: 'Buy', value: 'sale', for: 'Sale', index: 0 },
      BHKtype: '',
      propertyTypes: '',
      priceRange: ['', ''],
      moreStatus: { furnishingTypes: '', bathrooms: '', minArea: '', maxArea: '', newResale: '', constructionStatus: '', facing: '', amenities: '', listedBy: '', floor: '' },
      sortBy: 'featured',
      clearAll: false
    },
    outSideFilterState: {
      propertyTypes: false
    },
    builderSearchStatus: {
      cityPath: 'india',
      builderPath: '',
      cityName: '',
      builderName: '',
      city: '', name: '', quary: null, showResults: false, showError: false,
      selectedCityOption: JSON.stringify({ cityID: '', cityName: '' })
    },
    currPage: 1,
    pageRefresh: true,
    filterMenus: null,
    propertyStatus: 'sale',
    postPropertyFormData: {
      type: '',
      generalInfo: { name: '', email: '', countryCode: '+91', mobileNum: '', Iam: 'Individual/Owner', Otp: '', mobileVarification: false, completed: false },
      propertyInfo: {
        completed: false, listedFor: 'Sale', propertyType: 'Apartment', country: '', state: '', city: '', locality: '', subLocality: '', projectName: '',
        bedrooms: '', bathrooms: '', balcony: '', propertyOnFloor: '', noOfFloor: '', buildUpArea: '', buildUpUnit: '', carpetArea: '', carpetUnit: '', propertyStatus: 'Under Construction',
        month: '', year: '', reraId: ''
      },
      amenities: {
        completed: false, salePrice: '', pricePerUnit: '', isPriceNegotiable: 'no', facing: '', ownership: '', parking: '', flooringType: '', view: '', furnishingStatus: '',
        aminities: '', adPackage: '', aboutProperty: '', aboutBuilder: '', embadedLocation: ''
      },
      nearByPlace: {
        completed: false, busStation: '', railwayMetro: '', airport: '', hospital: '', worship: '', atm: '', school: '', mall: '', mainRoad: '', highway: '', expressWay: '',
        bank: '', publicGarden: '', amusementPark: '', milkDiary: '', movieTheatre: '', restaurant: '', library: '', swimmingPool: '', petrolGasPump: '', motorGarage: '', carChargingPoint: '',
        spaBeautySalon: '', pharmacy: ''
      },
      buyRentGallary: { completed: false },
      newProjectGallery: { completed: false },
      newProjectInfo: {
        completed: false, country: '', state: '', city: '', locality: '', subLocality: '', societyName: '', propertyType: '', bedroomFrom: '', bedRoomTo: '',
        bathroomsFrom:'',bathroomsTo:'',totalFloor:'',amenities:'',furnishingType:'',furnishingItem:'',areaFrom:'',areaFromUnit:'',areaTo:'',areaToUnit:'',
        priceFrom:'',priceTo:'',builderName:'',projectStaus:'',description:'',aboutBuilder:'',projectLink:'',image:'',video:''
      }
    },
    login_status: false,
    pageNotFoundPath: ''
  },
  reducers: {
    setuser(state, action) {
      state.userData = action.payload
      state.login_status = true
    },
    logout(state, action) {
      state.userData = {}
      state.login_status = false;
    },
    setlocation(state, action) {
      state.currLocation = action.payload
    },
    setPropertyStatus(state, action) {
      state.propertyStatus = action.payload
    },
    setPropertyListState(state, action) {
      state.propertyListState = action.payload
    },
    setFileterMenus(state, action) {
      state.filterMenus = action.payload
    },
    setCurrPage(state, action) {
      state.currPage = action.payload
    },
    setPageRefress(state, action) {
      state.pageRefresh = action.payload
    },
    setOutsideFilterState(state, action) {
      state.outSideFilterState = action.payload
    },
    setBuilderSearchStatus(state, action) {
      state.builderSearchStatus = action.payload
    },
    setPageNotFoundPath(state, action) {
      state.builderSearchStatus = action.payload
    },
    setPostPropertyFormData(state, action) {
      state.postPropertyFormData = action.payload
    },
  }
})
export const { setuser, logout, setlocation, setPropertyListState, setFileterMenus,
  setCurrPage, setPageRefress, setOutsideFilterState, setBuilderSearchStatus, setPageNotFoundPath, setPostPropertyFormData } = UserSlice.actions;

export default UserSlice.reducer;