export const Types = {
  ADD_ALERT: 'alerts/add_alert',
  REMOVE_ALERT: 'alerts/remove_alert',
};

export const addAlert = (payload) => {
  const id = Math.random().toString(5);
  return {
    type: Types.ADD_ALERT,
    payload: { ...payload, id },
  };
};

export const removeAlert = (id) => ({
  type: Types.REMOVE_ALERT,
  payload: id,
});
