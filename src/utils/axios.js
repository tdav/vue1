import axios from 'axios'


axios.defaults.baseURL = 'https://api.scafe.uz/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

axios.interceptors.response.use(

    (response) => {

        if (response.request.responseURL == "https://api.scafe.uz/api/User/Login" && response.status === 200  && response.data.isSuccess) {
            localStorage.setItem('authToken', response.data.data.token);
        }
        return Promise.resolve(response)
    },

    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                // Redirect to login page
                router.push('/login')
            } else {
                // Show a generic error message
                alert('An error occurred. Please try again later.')
            }
        }
        return Promise.reject(error)
    },
);

//export default 
export default axios;