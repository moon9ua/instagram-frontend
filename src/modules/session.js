import { register } from "../utils/api";

// action 타입
const SIGNIN = "session/SIGNIN";
const SIGNUP = "session/SIGNUP";
const CHANGE_SIGNIN = "session/CHANGE_SIGNIN";

// action 생성 함수
export const signIn = (signInFormWithRes) => ({ type: SIGNIN, signInFormWithRes });
export const signUp = () => ({ type: SIGNUP });
export const changeSignIn = (newKey, newValue) => ({ type: CHANGE_SIGNIN, newKey, newValue });

// thunk 함수
export const signInAsync = (signInForm) => async (dispatch) => {
  const token = await register(signInForm); // token말고 아마 email이랑 name도 이때 받아올듯. 같이 넣어줘야.
  dispatch(signIn({ ...signInForm, token }));
};
export const signUpAsync = (userInfo) => async (dispatch) => {
  //
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
      // return { ...action.session }; // 이게 되나?
      return "";
    case CHANGE_SIGNIN:
      return {
        ...state,
        signInForm: {
          ...state.signInForm,
          [action.newKey]: action.newValue, // ES6: 변수로 key를 할당하기
        },
      };

    default:
      return state;
  }
}
