import api from './api';
const user = (name) => {
  return {
    get: () => api.get(name),
    create: (data) => api.post(name, data),
    getUserByID: async (id, data) => api.get(name+'/'+id, data)
  };
};

export default user('/user');
