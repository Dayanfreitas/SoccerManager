import api from './api';
const playersServices = (name) => {
  return {
    get: () => api.get(name),
    getByUserId: (userId) => {
      return new Promise((resolve) => {
        resolve({
          id: 1,
          name: 'Dayan',
          number: '23',
          stars: '3',
          created_at: '2021-09-26T19:17:35.025Z',
          updated_at: '2021-09-26T19:22:19.318Z',
          user_id: 1,
          position_id: 5,
          position: {
            id: 5,
            name: 'Volante',
            initials: 'VOL',
            created_at: '2021-09-26T19:15:14.750Z',
            updated_at: '2021-09-26T19:15:14.750Z',
          },
        });
      });
    },
  };
};

export default playersServices('/players');
