import { SET_AREA, SET_TYPE, SET_LEVEL, SET_TIME } from '../actions/types';
const initialState = {
    loading: false,
    success: false,
    selectedType: [],
    selectedArea: [],
    selectedLevel: '',
    selectedTime: ''
  };

export default function(state = initialState, action) {
    switch (action.type) {
      case SET_TYPE:
        return {
          ...state,
          loading: false,
          selectedType: action.payload,
          success: true
        };
        case SET_AREA:
        return {
          ...state,
          loading: false,
          selectedArea: action.payload,
          success: true
        };
        case SET_LEVEL:
            return {
                ...state,
                loading: false,
          selectedLevel: action.payload,
          success: true
            };
            case SET_TIME:
            return {
                ...state,
                loading: false,
          selectedTime: action.payload,
          success: true
            }
      default:
        return state;
    }
  }