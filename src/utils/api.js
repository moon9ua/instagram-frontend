// const ENDPOINT = "http://localhost:8080/api/";
const ENDPOINT = "/api/";

const LOGIN = "login";
const REGISTER = "register";

// const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay)); // 임시

export const loginAPI = async (loginInfo) => {
  let response = await fetch(ENDPOINT + LOGIN, {
    method: "POST",
    body: JSON.stringify(loginInfo),
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  });

  if (response.status > 400) {
    throw new Error(`loginAPI: ${response.status}`);
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
    throw new Error(`registerAPI: ${response.status}`);
  }

  console.log(response); // 나중에 지워야
};
