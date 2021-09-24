const ENDPOINT = "/api";

const POSTS = "/posts";
const FEEDS = "/feeds";

export const createPostAPI = async (postInfo) => {
  const response = await fetch(ENDPOINT + POSTS, {
    method: "POST",
    body: JSON.stringify(postInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status >= 400) {
    throw new Error(`업로드에 실패했습니다. 다시 시도하십시오.`);
  }
};

export const deletePostAPI = async (postId) => {
  const response = await fetch(ENDPOINT + POSTS + "/" + postId, {
    method: "DELETE",
  });

  if (response.status >= 400) {
    throw new Error(`삭제에 실패했습니다. 다시 시도하십시오.`);
  }

  console.log(response); // ⬜️ 확인 및 사용 X
};

export const getPostsAPI = async (username) => {
  const response = await fetch(ENDPOINT + POSTS + "/" + username);

  if (response.status >= 400) {
    throw new Error("포스트 불러오기를 실패했습니다. 다시 시도하십시오.");
  }

  const { posts } = await response.json();
  return posts;
};

export const getFeedsAPI = async () => {
  const response = await fetch(ENDPOINT + POSTS + FEEDS);

  if (response.status >= 400) {
    throw new Error("Feed 불러오기를 실패했습니다. 다시 시도하십시오.");
  }

  const { posts } = await response.json();
  return posts;
};
