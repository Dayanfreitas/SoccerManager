import api from './api';
const playersServices = (name) => {
  return {
    get: () => api.get(name),
    update: (params) => {
      return new Promise((resolve) => {
        api
          .put(name+"/"+params.id, params)
          .then((r) => {
            resolve(r.data);
          })
          .catch((error) => {
            resolve(error.response);
          });
      });
    },
  };
};

export default playersServices('/players');
