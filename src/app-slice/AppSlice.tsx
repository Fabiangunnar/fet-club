import {NavType, navData} from "@/data/data";
import {createSlice} from "@reduxjs/toolkit";

interface InitialTypes {
  navdata: NavType[];
  isModalOpen: boolean;
  isModal2Open: boolean;
  isModal3Open: boolean;
  currentIndex: number;
}
const initialState: InitialTypes = {
  navdata: navData,
  isModalOpen: false,
  isModal2Open: false,
  isModal3Open: false,
  currentIndex: 0,
};
export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    OpenModal: (state, {payload}) => {
      state.currentIndex = payload;
      state.isModalOpen = true;
    },
    CloseModal: (state) => {
      state.isModalOpen = false;
    },
    OpenModal2: (state) => {
      state.isModal2Open = true;
    },
    CloseModal2: (state) => {
      state.isModal2Open = false;
    },
    OpenModal3: (state) => {
      state.isModal3Open = true;
    },
    CloseModal3: (state) => {
      state.isModal3Open = false;
    },
    setNavData: (state, {payload}) => {
      state.navdata = state.navdata.map((data) => {
        return data.id === payload.id
          ? {...data, state: true}
          : {...data, state: false};
      });
    },
  },
});

export const {
  OpenModal,
  CloseModal,
  OpenModal2,
  CloseModal2,
  OpenModal3,
  CloseModal3,
  setNavData,
} = AppSlice.actions;
export default AppSlice.reducer;
