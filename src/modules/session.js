import { loginAPI, registerAPI } from "../utils/api";

// action 타입
const SIGNIN = "session/SIGNIN";
const SIGNUP = "session/SIGNUP";
const CHANGE_SIGNIN = "session/CHANGE_SIGNIN";
const CHANGE_SIGNUP = "session/CHANGE_SIGNUP";

// action 생성 함수
export const signIn = (signInFormWithRes) => ({ type: SIGNIN, signInFormWithRes });
export const signUp = (signUpForm) => ({ type: SIGNUP, signUpForm });
export const changeSignIn = (newKey, newValue) => ({ type: CHANGE_SIGNIN, newKey, newValue });
export const changeSignUp = (newKey, newValue) => ({ type: CHANGE_SIGNUP, newKey, newValue });

// thunk 함수
export const signInAsync = (signInForm) => async (dispatch) => {
  try {
    const token = await loginAPI(signInForm); // token말고 아마 email이랑 name도 이때 받아올듯. 같이 넣어줘야.
    dispatch(signIn({ ...signInForm, token }));
  } catch (e) {
    console.error(e); // 처리 필요!!!
  }
};
export const signUpAsync = (signUpForm) => async (dispatch) => {
  try {
    await registerAPI(signUpForm);
    dispatch(signUp(signUpForm));
  } catch (e) {
    console.error(e); // 에러 처리 필요... 메세지 띄우는 식으로?
  }
};

const initialState = {
  isLogined: false,
  token: "",
  username: "",
  name: "",
  password: "",
  email: "",
  signInForm: {},
  signUpForm: {},
};

export default function session(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        isLogined: true,
        ...action.signInFormWithRes,
      };
    case SIGNUP:
      return {
        ...state,
        ...action.signUpForm,
      };
    case CHANGE_SIGNIN:
      return {
        ...state,
        signInForm: {
          ...state.signInForm,
          [action.newKey]: action.newValue, // ES6: 변수로 key를 할당하기
        },
      };
    case CHANGE_SIGNUP:
      return {
        ...state,
        signUpForm: {
          ...state.signUpForm,
          [action.newKey]: action.newValue, // ES6: 변수로 key를 할당하기
        },
      };

    default:
      return state;
  }
}
