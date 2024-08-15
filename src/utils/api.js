import axios from 'axios';

const api = {
  getThreads: () => axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list'),


  getThreadDetails: (threadId) => axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/${threadId}`),


  deleteThread: (threadId) => axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/${threadId}`),


  createReply: (threadId, data) => axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, data),
};

export default api;
