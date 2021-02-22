import axios from 'axios'

let ax = axios.create();

// config here

ax.defaults.baseURL = "http://localhost:20000/share-admin/"

ax.interceptors.request.use(config =>
{
    let token = localStorage.getItem("ApiToken")
    if (token)
    {
        config.headers["Authorization"] = token
    }
    return config
})

ax.interceptors.response.use(response =>
{
    if (response.status == 200) {
        return Promise.resolve(response);
    }
    return Promise.reject(response);
}, error =>
{
    return Promise.reject(error);
})

export default ax;