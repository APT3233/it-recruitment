import instance from "../utils/fetchAPI"

export const getJobByCompanyId = async (id: number) => {
  try {
    const res = await instance.get(`/companies/${id}`)
    if(res){
      return res.data
    }
  } catch (error) {
    console.error("[Axios]" ,error)
  }
}