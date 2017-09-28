export const login = payload => {
  return {
    type: 'LOG_IN',
    payload
  };
};

export const logoff = () => {
  return {
    type: 'LOG_OFf'
  };
};

export const updateAnimalList = payload => {
  return {
    type: 'UPDATE_ANIMAL_LIST',
    payload
  };
};
