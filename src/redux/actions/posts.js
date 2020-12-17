export const Types = {
  CREATE_POST_REQUEST: 'posts/create_post_request',
  CREATE_POST_SUCCESS: 'posts/create_post_success',
  GET_POSTS_REQUEST: 'posts/get_posts_request',
  GET_POSTS_SUCCESS: 'posts/get_posts_success',
  GET_POSTS_FAILURE: 'posts/get_posts_failure',
  GET_MORE_POSTS_REQUEST: 'posts/get_more_posts_request',
  GET_MORE_POSTS_SUCCESS: 'posts/get_more_posts_success',
  GET_MORE_POSTS_FAILURE: 'posts/get_more_posts_failure',
  GET_USER_POSTS_REQUEST: 'posts/get_user_posts_request',
  GET_USER_POSTS_SUCCESS: 'posts/get_user_posts_success',
  GET_USER_POSTS_ERROR: 'posts/get_user_posts_error',
  LIKE_POST_REQUEST: 'posts/like_post_request',
  LIKE_POST_SUCCESS: 'posts/like_post_success',
  UNLIKE_POST_REQUEST: 'posts/unlike_post_request',
  UNLIKE_POST_SUCCESS: 'posts/unlike_post_success',
  DELETE_POST_REQUEST: 'posts/delete_post_request',
  DELETE_POST_SUCCESS: 'posts/delete_post_success',
  SHARE_POST_REQUEST: 'posts/share_post_request',
  SHARE_POST_SUCCESS: 'posts/share_post_success',
  VOTE_POST_POLL_REQUEST: 'posts/vote_post_poll_request',
  VOTE_POST_POLL_SUCCESS: 'posts/vote_post_poll_success',
  GET_POST_LIKE_REQUEST: 'posts/get_post_like_request',
  GET_POST_LIKE_SUCCESS: 'posts/get_post_like_success',
  POST_ERROR: 'posts/post_error',
};

export const createPostRequest = (data) => ({
  type: Types.CREATE_POST_REQUEST,
  payload: data,
});

export const createPostSuccess = (data) => ({
  type: Types.CREATE_POST_SUCCESS,
  payload: data,
});

export const sharePostRequest = (data) => ({
  type: Types.SHARE_POST_REQUEST,
  payload: data,
});

export const sharePostSuccess = (data) => ({
  type: Types.SHARE_POST_SUCCESS,
  payload: data,
});

export const getPostsRequest = (data) => ({
  type: Types.GET_POSTS_REQUEST,
  payload: data,
});

export const getPostsSuccess = ({ items }) => ({
  type: Types.GET_POSTS_SUCCESS,
  payload: { items },
});

export const getMorePostsRequest = (data) => ({
  type: Types.GET_MORE_POSTS_REQUEST,
  payload: data,
});

export const getMorePostsSuccess = ({ items }) => ({
  type: Types.GET_MORE_POSTS_SUCCESS,
  payload: { items },
});

export const getUserPostsRequest = (handle) => ({
  type: Types.GET_USER_POSTS_REQUEST,
  payload: handle,
});

export const getUserPostsSuccess = (data) => ({
  type: Types.GET_USER_POSTS_SUCCESS,
  payload: data,
});

export const getUserFollowersRequest = (handle) => ({
  type: Types.GET_USER_FOLLOWERS_REQUEST,
  payload: handle,
});

export const getUserFollowersSuccess = (data) => ({
  type: Types.GET_USER_FOLLOWERS_SUCCESS,
  payload: data,
});

export const likePostRequest = (postId) => ({
  type: Types.LIKE_POST_REQUEST,
  payload: postId,
});

export const likePostSuccess = (data) => ({
  type: Types.LIKE_POST_SUCCESS,
  payload: data,
});

export const unlikePostRequest = (postId) => ({
  type: Types.UNLIKE_POST_REQUEST,
  payload: postId,
});

export const unlikePostSuccess = (data) => ({
  type: Types.UNLIKE_POST_SUCCESS,
  payload: data,
});

export const deletePostRequest = (postId) => ({
  type: Types.DELETE_POST_REQUEST,
  payload: postId,
});

export const deletePostSuccess = (postId) => ({
  type: Types.DELETE_POST_SUCCESS,
  payload: postId,
});

export const getPostLikesRequest = (postId) => ({
  type: Types.GET_POST_LIKE_REQUEST,
  payload: postId,
});

export const getPostLikesSuccess = (data) => ({
  type: Types.GET_POST_LIKE_SUCCESS,
  payload: data,
});

export const getPostsError = ({ errorMessage }) => ({
  type: Types.POST_ERROR,
  payload: { errorMessage },
});

export const getUserPostsError = ({ errorMessage }) => ({
  type: Types.GET_USER_POSTS_ERROR,
  payload: { errorMessage },
});

export const votePostPollRequest = (data) => ({
  type: Types.VOTE_POST_POLL_REQUEST,
  payload: data,
});

export const votePostPollSuccess = (data) => ({
  type: Types.VOTE_POST_POLL_SUCCESS,
  payload: data,
});

export const usersError = ({ errorMessage }) => ({
  type: Types.POST_ERROR,
  payload: { errorMessage },
});

export const pollError = ({ errorMessage }) => ({
  type: Types.POST_ERROR,
  payload: { errorMessage },
});
