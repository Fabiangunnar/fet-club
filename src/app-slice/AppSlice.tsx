import {NavType, navData} from "@/data/data";
import {createSlice} from "@reduxjs/toolkit";

interface InitialTypes {
  navdata: NavType[];
  isModalOpen: boolean;
  currentIndex: number;
}
const initialState: InitialTypes = {
  navdata: navData,
  isModalOpen: false,
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
    setNavData: (state, {payload}) => {
      state.navdata = state.navdata.map((data) => {
        return data.id === payload.id
          ? {...data, state: true}
          : {...data, state: false};
      });
    },
  },
});

export const {OpenModal, CloseModal, setNavData} = AppSlice.actions;
export default AppSlice.reducer;
