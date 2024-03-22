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
      generalInfo: { name: '', email: '', countryCode: '+91', mobileNum: '', Iam: 'Individual/Owner', Otp: '',mobileVarification:false, completed:false },
      propertyInfo: {completed:false,listedFor:'Sale'},
      amenities: {completed:false},
      nearByPlace: {completed:false},
      buyRentGallary: {completed:false},
      newProjectGallery: {completed:false}
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