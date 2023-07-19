import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToggleMenu {
  isMenuOpen: boolean;
  isTransparent: boolean;
}

const initialState = {
  isMenuOpen: false,
  isTransparent: true,
} as ToggleMenu;

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleMenu(state) {
      console.log(state.isMenuOpen)
      state.isMenuOpen = !state.isMenuOpen;
    },
    transparentMenu(state) {
      state.isTransparent = true;
    },
    disableTransparentMenu(state) {
      state.isTransparent = false;
    },
  },
});

export const { toggleMenu, transparentMenu, disableTransparentMenu } =
  headerSlice.actions;
export default headerSlice.reducer;
