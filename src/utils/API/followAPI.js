const ENDPOINT = "/api";

const FOLLOW = "/follow";
const FOLLOWERS = "/followers";
const FOLLOWINGS = "/followings";

export const followAPI = async (username) => {
  const response = await fetch(ENDPOINT + FOLLOW + "/" + username, {
    method: "POST",
    headers: {
      token: "...", // 토큰 넣는 방법 어떻게?
    },
  });

  if (response.status >= 400) {
    throw new Error(`팔로우에 실패했습니다. 다시 시도하십시오.`);
  }

  console.log(response); // ⬜️
};

export const unfollowAPI = async (username) => {
  const response = await fetch(ENDPOINT + FOLLOW + "/" + username, {
    method: "DELETE",
    headers: {
      token: "...", // 토큰 넣는 방법 어떻게?
    },
  });

  if (response.status >= 400) {
    throw new Error(`언팔로우에 실패했습니다. 다시 시도하십시오.`);
  }

  console.log(response); // ⬜️
};

export const getFollowersAPI = async (username) => {
  const response = await fetch(ENDPOINT + FOLLOW + "/" + username + FOLLOWERS);

  if (response.status >= 400) {
    throw new Error(`팔로워 가져오기에 실패했습니다. 다시 시도하십시오.`);
  }

  const json = await response.json();
  console.log(json); // ⬜️
  return json;
};

export const getFollowingsAPI = async (username) => {
  const response = await fetch(ENDPOINT + FOLLOW + "/" + username + FOLLOWINGS);

  if (response.status >= 400) {
    throw new Error(`팔로잉 가져오기에 실패했습니다. 다시 시도하십시오.`);
  }

  const json = await response.json();
  console.log(json); // ⬜️
  return json;
};
