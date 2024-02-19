import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    currLocation: { country: '90', city: 'Ahmedabad', loaction: null, area: 'Ahmedabad',code:'9062' },
    propertyListState: {
      propertyStatus: { text: 'Buy', value: 'sale', index: 0 },
      BHKtype: '',
      propertyTypes: [],
      priceRange: ['', ''],
      moreStatus:{furnishingTypes:[],bathrooms:[],minArea:'',maxArea:'',newResale:'',constructionStatus:'',facing:[],amenities:[],listedBy:[]},
    },
    currPage:1,
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
  }
})
export const { setuser, logout, setlocation, setPropertyListState, setFileterMenus,setCurrPage } = UserSlice.actions;

export default UserSlice.reducer;