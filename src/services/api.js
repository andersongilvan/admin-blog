import axios from "axios";


const api = axios.create({
    baseURL: "https://api-express-mongodb-two.vercel.app"
})
export default api