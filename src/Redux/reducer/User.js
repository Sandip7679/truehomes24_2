import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    currLocation:{ country: null, city: 'Ahmedabad', loaction: null, area: 'Ahmedabad' },
    propertyListState:{propertyStatus: { text: 'Buy', value: 'sale',index:0 },BHKtype:'',propertyTypes:[],priceRange:[0, 100000000]},
    filterMenus:null,
    propertyStatus:'sale',
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
    setlocation(state,action){
      state.currLocation = action.payload
    },
    setPropertyStatus(state,action){
        state.propertyStatus = action.payload    
    },
    setPropertyListState(state,action){
        state.propertyListState = action.payload    
    },
    setFileterMenus(state,action){
        state.filterMenus = action.payload    
    }
  }
})
export const { setuser, logout,setlocation,setPropertyListState,setFileterMenus } = UserSlice.actions;

export default UserSlice.reducer;