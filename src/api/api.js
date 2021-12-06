import service from "../utils/request";

// export const loginApi = (userName,password)=> service.post('/user/login',{userName,password})
export const loginApi = (data)=> service({
    method: "POST",
    // url: `/api/v1/system/user/login`,
    url: `/user/login`,
    data
})

