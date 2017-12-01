import axios from 'axios'

const HOST = "https://cgi.cse.unsw.edu.au/~z3420752"

const HTTP = axios.create({
  baseURL: `${HOST}/teaching-api/index.cgi`//,
  //withCredentials: true
})

export default HTTP;
