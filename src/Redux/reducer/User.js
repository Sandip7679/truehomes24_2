import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    // footerData:null,
    currLocation: { country: '90', city: 'India',code:'', location: '',locationName:null,project:'',projectName:null, area: 'City' },
    propertyListState: {
      propertyStatus: { text: 'Buy', value: 'sale',for:'Sale', index: 0 },
      BHKtype: '',
      propertyTypes: '',
      priceRange: ['', ''],
      moreStatus:{furnishingTypes:'',bathrooms:'',minArea:'',maxArea:'',newResale:'',constructionStatus:'',facing:'',amenities:'',listedBy:'',floor:''},
      sortBy:'featured',
      clearAll:false
    },
    outSideFilterState:{
      propertyTypes:false
    },
    builderCity:'india',
    currPage:1,
    pageRefresh:true,
    filterMenus: null,
    propertyStatus: 'sale',
    login_status: false,
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
    setBuilderCity(state, action) {
      state.builderCity = action.payload
    },
  }
})
export const { setuser, logout, setlocation, setPropertyListState, setFileterMenus,setCurrPage,setPageRefress,setOutsideFilterState,setBuilderCity } = UserSlice.actions;

export default UserSlice.reducer;