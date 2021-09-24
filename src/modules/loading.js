// action 타입
const START_LOADING = "loading/START_LOADING";
const END_LOADING = "loading/END_LOADING";

// action 생성 함수
export const startLoading = () => ({ type: START_LOADING });
export const endLoading = () => ({ type: END_LOADING });

const initialState = false;

export default function loading(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return true;
    case END_LOADING:
      return false;
    default:
      return state;
  }
}
