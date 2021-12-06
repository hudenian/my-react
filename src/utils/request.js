import axios from 'axios'

const service = axios.create({
    baseURL: '/proxyApi/react',
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    (config) => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)


// response interceptor
service.interceptors.response.use(
    (response) => {
        // const { data: { status, msg }, config: { url } } = response
        // if (status === 1000) {
        //     const { pathname } = window.location
        //     location.href = `/login?type=redirect#${pathname}`
        // }
        return response.data;
    },
    error => {
        if (error.message === '自主取消') {
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)

export default service
