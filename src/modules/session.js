import { loginAPI, registerAPI } from "../utils/api";

// action 타입
const SIGNIN = "session/SIGNIN";
const SIGNIN_SUCCESS = "session/SIGNIN_SUCCESS";
const SIGNIN_ERROR = "session/SIGNIN_ERROR";

const SIGNUP = "session/SIGNUP";
const SIGNUP_SUCCESS = "session/SIGNUP_SUCCESS";
const SIGNUP_ERROR = "session/SIGNUP_ERROR";

const REMOVE_ERROR = "session/REMOVE_ERROR";

// action 생성 함수, action 생성 함수 + thunk 함수
export const signIn = (signInForm) => async (dispatch) => {
  dispatch({ type: SIGNIN });
  try {
    const token = await loginAPI(signInForm); // token말고 아마 email이랑 name도 이때 받아올듯. 같이 넣어줘야.
    dispatch({ type: SIGNIN_SUCCESS, signInForm, token });
  } catch (e) {
    dispatch({ type: SIGNIN_ERROR, error: e.message });
  }
};
export const signUp = (signUpForm) => async (dispatch) => {
  dispatch({ type: SIGNUP });
  try {
    await registerAPI(signUpForm);
    dispatch({ type: SIGNUP_SUCCESS, signUpForm });
  } catch (e) {
    dispatch({ type: SIGNUP_ERROR, error: e.message });
  }
};
export const removeError = () => {
  return { type: REMOVE_ERROR };
};

const initialState = {
  username: "",
  name: "",
  password: "",
  email: "",
  token: "",
  loading: false,
  isLogined: false,
  error: null,
};

export default function session(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        loading: true,
        isLogined: false,
        error: null,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        ...action.signInForm,
        token: action.token,
        loading: false,
        isLogined: true,
        error: null, // 이렇게 하나씩 다 해줘야하나?
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        isLogined: false,
        error: action.error,
      };
    case SIGNUP:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case REMOVE_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
