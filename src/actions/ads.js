export const Types = {
  GET_RANDOM_AD_REQUEST: 'ads/get_random_ad_request',
  GET_RANDOM_AD_SUCCESS: 'ads/get_random_ad_success',
};

export const getAddRequest = () => {
  return {
    type: Types.GET_RANDOM_AD_REQUEST,
  };
};

export const getAddSuccess = (data) => {
  return {
    type: Types.GET_RANDOM_AD_SUCCESS,
    payload: data,
  };
};
