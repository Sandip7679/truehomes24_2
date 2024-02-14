import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    currLocation:null,
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
    }
  }
})
export const { setuser, logout,setlocation } = UserSlice.actions;

export default UserSlice.reducer;