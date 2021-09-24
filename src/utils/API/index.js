import { loginAPI } from "./authAPI";
import {
  createCommentAPI,
  deleteCommentAPI,
  getCommentOfCommentAPI,
  getCommentOfPostAPI,
} from "./commentAPI";
import { followAPI, getFollowersAPI, getFollowingsAPI, unfollowAPI } from "./followAPI";
import { createPostAPI, deletePostAPI, getPostsAPI } from "./postAPI";
import { deleteUserAPI, getUserAPI, patchUserAPI, registerAPI } from "./userAPI";

// const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay)); // 임시

export { loginAPI };
export { getUserAPI, deleteUserAPI, patchUserAPI, registerAPI };
export { createPostAPI, deletePostAPI, getPostsAPI };
export { followAPI, unfollowAPI, getFollowersAPI, getFollowingsAPI };
export { createCommentAPI, deleteCommentAPI, getCommentOfCommentAPI, getCommentOfPostAPI };

export const test = async () => {
  try {
  } catch (e) {
    console.error(e);
  }
};
