import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:9000',
  timeout: 10000,
})

instance.interceptors.request.use(config => {
  


  return config
})

instance.interceptors.response.use(config => {


  return config
})


export async function getPoem() {
  const data = await instance.get('https://v1.jinrishici.com/all.json')
  if(data.status === 200) {
    return data
  }
}

