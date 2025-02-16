import instance from "../utils/fetchAPI";

export const handleLogin = async (username: string, password: string) => {
  console.log(username, password)
  try {
    const res = await instance.post("/auth/login", {
      username, password
    })
    if (res) {
      console.log("Server: ", res)
      return {
        access_token: res?.data?.access_token
      };
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("[Axios]: ", err)
  }
}