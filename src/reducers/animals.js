const animals = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_ANIMAL_LIST':
      return action.payload;
    default:
      return state;
  }
};

export default animals;
