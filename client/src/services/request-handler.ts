import axios from 'axios';
const BASE_URL = 'http://localhost:4000';

export default function requestHandler(method:string = 'GET', endpoint: string, data?: any) {
  const url = `${BASE_URL}${endpoint}`
    return axios({
      method,
      url,
      data,
      headers: { 'Content-Type': 'application/json' },
    })
    .then(({ data }: any) => {
      if (data.status !== 200) return Promise.reject(data);

      return data;
    });
}
