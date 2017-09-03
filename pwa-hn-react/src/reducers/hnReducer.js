import { NEWS_LIST } from '../const';

const initState = {
  news: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case NEWS_LIST:
      return {
        ...state,
        news: action.data,
      };
    default:
      return state;
  }
};
