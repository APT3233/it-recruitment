import { AxiosResponse } from "axios";
import instance from "../utils/fetchAPI"

interface Application {
  name: string;
  phone: string;
  email: string;
  introduce: string;
  link_project?: string;
  yoe: number;
  job_id: number;
}
interface CvResponse{
  message: string;
  status: string;
}

export const getAllJob = async () => {
  try {
    const res = await instance.get('/job')
    return res.data
  } catch (err) {
    console.error(err)
    return null
  }
}

export const submitApplicationForm = async (application: Application):
  Promise<AxiosResponse<CvResponse> | unknown | { error: string }> => {
  try {
    const res = await instance.post<CvResponse>("/apply-job", application)
    return res.data;
  } catch (error) {
    return {
      error: error instanceof Error ?
        error.message : "An unknown error occurred"
    };
  }
}