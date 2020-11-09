export const Types = {
  GET_AUTHORS_REQUEST: 'authors/get_authors_request',
  GET_AUTHORS_SUCCESS: 'authors/get_authors_success',
  GET_SINGLE_AUTHOR_REQUEST: 'authors/get_single_author_request',
  GET_SINGLE_AUTHOR_SUCCESS: 'authors/get_single_author_success',
};

export const getAuthorsRequest = () => ({
  type: Types.GET_AUTHORS_REQUEST,
});

export const getAuthorsSuccess = (data) => ({
  type: Types.GET_AUTHORS_SUCCESS,
  payload: data,
});

export const getSingleAuthorRequest = (id) => ({
  type: Types.GET_SINGLE_AUTHOR_REQUEST,
  payload: id,
});

export const getSingleAuthorSuccess = (data) => ({
  type: Types.GET_SINGLE_AUTHOR_SUCCESS,
  payload: data,
});
