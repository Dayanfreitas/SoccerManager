import api from './api';

const position = (name) => {
  return {
    get: () => {
      return new Promise((resolve) => {
        api
          .get(name)
          .then((r) => {
            resolve(r);
          })
          .catch((error) => {
            resolve(error.response);
          });
      });
    },
  };
};

export default position('/positions');
