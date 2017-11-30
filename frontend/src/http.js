import axios from 'axios'

const HOST = "http://localhost/~TheHD"

const HTTP = axios.create({
  baseURL: `${HOST}/teaching-api/index.cgi`//,
  //withCredentials: true
})

export default HTTP;
