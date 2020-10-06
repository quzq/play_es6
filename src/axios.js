import axios from 'axios'

export default ()=>{
  console.log('--- axios.js -----------------------------')

  function getToken(){
    return '' // トークンなし
  }

  axios.interceptors.request.use(config => {
    if (!getToken()) {
      throw new axios.Cancel('トークンがないためリクエストはキャンセルされました');
    } else {
      config.headers.Authorization = "Bearer " + getToken();
      return config;
    }
  });

  async function getZip() {
    try {
      const response = await axios.get('http://api.thni.net/jzip/X0401/JSON/064/0941.js');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  getZip();

}