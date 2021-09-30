const ENDPOINT = "/api";

const COMMENTS = "/comments";
const POSTS = "/posts";

export const createCommentAPI = async (commentInfo, token) => {
  const response = await fetch(ENDPOINT + COMMENTS, {
    method: "POST",
    body: JSON.stringify(commentInfo),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status >= 400) {
    throw new Error(`댓글 생성에 실패했습니다. 다시 시도하십시오.`);
  }

  const json = await response.json();
  return json;
};

export const deleteCommentAPI = async (commentId) => {
  const response = await fetch(ENDPOINT + COMMENTS + "/" + commentId, {
    method: "DELETE",
  });

  if (response.status >= 400) {
    throw new Error(`댓글 삭제에 실패했습니다. 다시 시도하십시오.`);
  }
};

export const getCommentOfCommentAPI = async (commentId) => {
  const response = await fetch(
    ENDPOINT + COMMENTS + "/" + commentId + COMMENTS
  );

  if (response.status >= 400) {
    throw new Error(`대댓글 불러오기에 실패했습니다. 다시 시도하십시오.`);
  }

  const json = await response.json();
  return json;
};

export const getCommentOfPostAPI = async (postId) => {
  const response = await fetch(ENDPOINT + POSTS + "/" + postId + COMMENTS);

  if (response.status >= 400) {
    throw new Error(
      `포스트의 댓글 불러오기에 실패했습니다. 다시 시도하십시오.`
    );
  }

  const json = await response.json();
  return json;
};
