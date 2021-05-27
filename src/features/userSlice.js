import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: "1",
  image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png",
  role: "controller",
  roleImage: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png",
  biography: "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.",
};

export const userSlice = createSlice({
  name: 'user',

  initialState,
 
  reducers: {
    changeId: (state, action) => {
      state.id = action.payload.id;
      state.image = action.payload.image;
      state.role = action.payload.role;
      state.roleImage = action.payload.roleImage;
      state.biography = action.payload.biography;
    },
    
  }
});

export const { changeId } = userSlice.actions;

export const selectId = (state) => state.user.id;
export const selectImage = (state) => state.user.image;
export const selectRole = (state) => state.user.role;
export const selectRoleImage = (state) => state.user.roleImage;
export const selectBiography = (state) => state.user.biography;

export default userSlice.reducer;
