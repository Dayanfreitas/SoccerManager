import api from './api';
const playersServices = (name) => {
  return {
    get: () => api.get(name),
    getByUserId: (userId) => {
      return new Promise((resolve) => {
        api
          .get(name)
          .then((r) => {
            // TODO: CRIAR ROTA DE BUSCA POR IR NO BACK END
            let user = r.data.find((e) => e.id == userId);
            resolve(user);
          })
          .catch((error) => {
            resolve(error.response);
          });
      });
    },
    update: (params) => {
      return new Promise((resolve) => {
        api
          .put(name+"/"+params.id, params)
          .then((r) => {
            debugger;
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
