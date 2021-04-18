import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return { ...state, articles: state.articles.concat(action.payload) };
  }

  if (action.type === 'DATA_LOADED') {
    return { ...state, remoteArticles: state.remoteArticles.concat(action.payload) }
  }
  return state;
}

export default rootReducer;
