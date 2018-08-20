import { SET_MODE, FINISH_LOAD_FONTS } from './actionTypes';

export const setMode = (mode) => ({type: SET_MODE, mode});
export const finishLoadFonts = (isLoading) => ({type: FINISH_LOAD_FONTS, isLoading});