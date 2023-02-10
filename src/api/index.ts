import axios from 'axios'



// const url = `${process.env.REACT_APP_BACKEND_URL}/api`
const url = "https://supermarketcupons-production.up.railway.app/api"


const api = axios.create({baseURL: url})

export default api