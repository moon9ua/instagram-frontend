// const ENDPOINT = "http://localhost:8080/api/";
const ENDPOINT = "/api/";
const LOGIN = "login";
const REGISTER = "register";

// const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay)); // 임시

export const loginAPI = async (loginInfo) => {
  let response = await fetch(ENDPOINT + LOGIN, {
    method: "POST",
    body: JSON.stringify(loginInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status > 400) {
    throw new Error(`아이디와 비밀번호를 확인하세요.`);
  }

  const { token } = await response.json();
  return token;
};

export const registerAPI = async (registerInfo) => {
  const response = await fetch(ENDPOINT + REGISTER, {
    method: "POST",
    body: JSON.stringify(registerInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status >= 400) {
    throw new Error(`가입에 실패했습니다. 다시 시도하십시오.`);
  }

  console.log(response);
};
