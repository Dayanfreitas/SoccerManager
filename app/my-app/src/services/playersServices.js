import api from './api';
const playersServices = (name) => {
  return {
    get: () => api.get(name),
  };
};

export default playersServices('/players');
