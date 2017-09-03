import { NEWS_LIST, NEWEST_LIST, SHOW_LIST } from '../const';

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
    case NEWEST_LIST:
      return {
        ...state,
        newest: action.data,
      };
    case SHOW_LIST:
      return {
        ...state,
        show: action.data,
      };
    default:
      return state;
  }
};
