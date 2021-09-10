import { register } from "../utils/api";

// action 타입
const SIGNUP = "user/SIGNUP";

// action 생성 함수
export const signUp = (session) => ({ type: SIGNUP, session });

// thunk 함수
export const signUpAsync = (userInfo) => async (dispatch) => {
  const token = await register(userInfo);
  dispatch(signUp({ token, userInfo }));
};

// 이거 구조도 모르겠음. session으로 한번 더 감싸는게 맞는건가?
const initialState = {
  session: {
    token: "",
    userInfo: {
      user: "",
      name: "",
      password: "",
      email: "",
    },
  },
};

export default function session(state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return { session: { ...action.session } }; // 이게 되나?
    default:
      return state;
  }
}
