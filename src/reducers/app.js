import { APP_LOADED } from '~/src/constants/action-types';

const initialState = {
  isFirstTimeOpen: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADED:
      return {
        ...state,
        isFirstTimeOpen: false,
      };

    default:
      return state;
  }
};
