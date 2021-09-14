import { loginAPI, registerAPI } from "../utils/api";

// action 타입
const SIGNIN = "session/SIGNIN";
const SIGNUP = "session/SIGNUP";

// action 생성 함수
export const signIn = (signInForm, token) => ({ type: SIGNIN, signInForm, token });
export const signUp = (signUpForm) => ({ type: SIGNUP, signUpForm });

// thunk 함수
export const signInAsync = (signInForm) => async (dispatch) => {
  console.log(signInForm);

  try {
    const token = await loginAPI(signInForm); // token말고 아마 email이랑 name도 이때 받아올듯. 같이 넣어줘야.
    dispatch(signIn(signInForm, token));
  } catch (e) {
    // throw e;
    console.error(e);
  }
};
export const signUpAsync = (signUpForm) => async (dispatch) => {
  console.log(signUpForm);

  try {
    await registerAPI(signUpForm);
    dispatch(signUp(signUpForm));
  } catch (e) {
    // throw e;
    console.error(e);
  }
};

const initialState = {
  isLogined: false,
  token: "",
  username: "",
  name: "",
  password: "",
  email: "",
};

export default function session(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        ...action.signInForm,
        isLogined: true,
        token: action.token,
      };
    case SIGNUP:
      return {
        ...state,
        ...action.signUpForm,
      };

    default:
      return state;
  }
}
