import { getPostsAPI } from "../utils/api";

// action 타입
const GET_POSTS = "post/GET_POSTS";
const GET_POSTS_SUCCESS = "post/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "post/GET_POSTS_ERROR";

// action 생성 함수
export const getPosts = (username) => async (dispatch) => {
  dispatch({ type: GET_POSTS, username });
  try {
    const posts = await getPostsAPI(username);
    dispatch({ type: GET_POSTS_SUCCESS, posts });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e.message });
  }
};

const initialState = {
  username: "",
  posts: [],
  error: "",
  loading: false,
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        username: action.username,
        error: "",
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        error: "",
        loading: false,
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}
