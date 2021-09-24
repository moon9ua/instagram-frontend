const ENDPOINT = "/api";

const USER = "/user";
const REGISTER = "/register";

export const getUserAPI = async (username) => {
  const response = await fetch(ENDPOINT + USER + "/" + username);

  if (response.status >= 400) {
    throw new Error(`데이터 가져오기에 실패했습니다. 다시 시도하십시오.`);
  }

  const json = await response.json();
  console.log("getUserAPI:", json);
  return json; // email, image, name, text, username // ⬜️ 확인 및 사용 X
};

export const deleteUserAPI = async (username) => {
  const response = await fetch(ENDPOINT + USER + "/" + username, {
    method: "DELETE",
  });

  if (response.status >= 400) {
    throw new Error(`탈퇴에 실패했습니다. 다시 시도하십시오.`);
  }

  console.log(response); // ⬜️ 확인 및 사용 X
};

export const patchUserAPI = async (username, userInfo) => {
  const response = await fetch(ENDPOINT + USER + "/" + username, {
    method: "PATCH",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status >= 400) {
    throw new Error(`갱신에 실패했습니다. 다시 시도하십시오.`);
  }

  console.log(response); // ⬜️ 확인 및 사용 X
};

export const registerAPI = async (registerInfo) => {
  const response = await fetch(ENDPOINT + USER + REGISTER, {
    method: "POST",
    body: JSON.stringify(registerInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status >= 400) {
    throw new Error(`가입에 실패했습니다. 다시 시도하십시오.`);
  }
};
