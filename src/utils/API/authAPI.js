const ENDPOINT = "/api";

const LOGIN = "/auth/login";

export const loginAPI = async (loginInfo) => {
  let response = await fetch(ENDPOINT + LOGIN, {
    method: "POST",
    body: JSON.stringify(loginInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status >= 400) {
    throw new Error(`아이디와 비밀번호를 확인하세요.`);
  }

  const { token } = await response.json();
  return token;
};
