import instance from "../utils/fetchAPI"

interface registerForm{
  username: string;
  email: string;
  password: string
  nameCompany: string;
  address: string;
  phoneNumber: string;
  website: string | string[] | null;
  description: string;
}

const login = async (username: string, password: string) => {
  try {
    const response = await instance.post('/auth/login', {
      username,
      password
    })
    if (response) {
      return {
        access_token: response.data?.access_token
      }
    }
  }
  catch (err) {
    console.error("Login failed: ", err)
  }
}

const register = async (application: registerForm) => {
  try {
    const response = await instance.post('/auth/register', {
      application
    })
    if (response) {
      return {
        access_token: response.data?.access_token
      }
    }
  }
  catch (err) {
    console.error("Register failed: ", err)
  }
}