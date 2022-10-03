import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
  } from "axios";
  

const onRequest = async (config) => {
    const token = await JSON.parse(localStorage.getItem("token"));
    config.headers["Authorization"] = `Bearer ${token.access_token}`;
  
    return config;
};

const onRequestError = (error) => {
    return Promise.reject(error);
};

const onResponse = (response) => {
    return response;
};

const onResponseError = async (error) => {
    if (error.response) {
        // Access Token was expired
        if (
            error.response.status === 401 &&
            error.response.data.detail === "Token is invalid or expired"
        ) {
            const storedToken = await JSON.parse(localStorage.getItem("token"));

            try {
                const rs = await axios.post(`token/refresh`, {
                refresh: storedToken.refresh_token,
                });

                const { access } = rs.data;
                storedToken.access_token = access;

                localStorage.setItem("token", JSON.stringify(storedToken));

                return;
            } catch (_error) {
                return Promise.reject(_error);
            }
        }
    }
    return Promise.reject(error);
};

export const setupInterceptorsTo = (
    axiosInstance
) => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
};

export const api = setupInterceptorsTo(
  axios.create({
    baseURL: "http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json",
    },
    mode: 'no-cors', 
  })
);