import axios from 'axios'

//product services
export default axios.create({
    baseURL: "http://localhost:8081",
    headers: {"content-type":"application/json"}
});