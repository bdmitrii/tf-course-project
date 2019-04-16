import axios from 'axios';

const setToken = (token: string | boolean | null) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setToken;
