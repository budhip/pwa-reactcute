import { DETAIL_COMMENT } from '../const';

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case DETAIL_COMMENT:
      return {
        state: action.data,
      };
    default:
      return state;
  }
};
