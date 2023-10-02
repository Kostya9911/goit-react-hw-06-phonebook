export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filters/changeFilter':
      console.log(state);
      return action.payload;

    default:
      return state;
  }
};

export const changeFilter = value => {
  return {
    type: 'filters/changeFilter',
    payload: value,
  };
};
