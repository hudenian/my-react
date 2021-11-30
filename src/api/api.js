import axios from "../../utils/request";

export const loginApi = (username,password)=> axios.post('/user/login',{userName:username,password:password})

