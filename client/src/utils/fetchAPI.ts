import axios from "axios"

// initialization instance
const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  withCredentials: true
})

// auth header
// instance.interceptors.request.use(
//   (config) => {
//     const authPaths = ["/auth/login", "/auth/register", "/home", "/"];
//     const token = localStorage.getItem("access_token");

//     if (authPaths.includes(config.url as string)) return config;

//     if (token && !isTokenExpired(token))
//       config.headers.Authorization = `Bearer ${token}`
//     else if (!token || isTokenExpired(token))
//       if (window.location.pathname !== `${import.meta.env.VITE_BACKEND_URL}/login`)
//         window.location.href = `${import.meta.env.VITE_BASE_URL}/login`;

//     return config
//   },
//   (err) => Promise.reject(err)
// )
const isTokenExpired = (token: string) => {
  if (!token) return true;

  const parts = token.split(".");
  if (parts.length !== 3) return true;

  try {
    const payloadBase64 = parts[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    const currentTime = Math.floor(Date.now() / 1000);

    return decodedPayload.exp < currentTime;
  } catch (err) {
    console.log("[Axios] Error decoding token: ", err)
    return true;
  }
};

// interceptors for response
instance.interceptors.response.use(
  (response) => { return response; },
  async (err) => {
    if (err && err.message)
      return Promise.reject(err.response.data)

    return Promise.reject(err);
  }
)

export default instance;