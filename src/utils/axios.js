    import axios from 'axios';
    console.log(axios);


    axios.defaults.baseURL = 'https://api.scafe.uz/api/';
    axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhNmEzNDg4NC1iNzI3LTQxZmYtOTMwYi1mYmM2OWFjYjc2Y2YiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiJkNGI1NjNiZS04OTI2LTQ2ZTgtYjM3Ny0zZGU3YmYwOTZjMDgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4gQWRtaW4gQWRtaW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6Ijk5ODk5ODI3ODk2MCIsIlJlc3RhdXJhbnRDaGFpbklkIjoiYWFhYWFhYWEtODkyNi00NmU4LWIzNzctM2RlN2JmMDk2YzA4IiwiUmVzdGF1cmFudElkIjoiYThiOGU4NmItNTk4My00NTI5LWE2MjEtNGRjNDFkODAxMDI2IiwiTGFuZyI6IlVaIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi0JDQtNC80LjQvdC40YHRgtGA0LDRgtC-0YAiLCJleHAiOjE3NDQwMDc2NjMsImlzcyI6Imh0dHBzOi8vMTExLnV6IiwiYXVkIjoiaHR0cHM6Ly8xMTEudXoifQ.rwmAEq2oSOr8Ur_tqSUnRngQXJWrYOhy0uREuxf7zYs`;

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