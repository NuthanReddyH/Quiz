import { SET_TYPE, SET_AREA, SET_LEVEL, SET_TIME } from './types';

export const setType = (typeList,value) => dispatch => {
    dispatch({ type: SET_TYPE, payload: value ? typeList : "" });
};

export const setArea = (areaList,value) => dispatch => {
    dispatch({ type: SET_AREA, payload: value ? areaList : "" });
}
export const setLevel = (value) => dispatch => {
    dispatch({ type: SET_LEVEL, payload: value });
}
export const setTime = (value) => dispatch => {
    dispatch({ type: SET_TIME, payload: value });
}