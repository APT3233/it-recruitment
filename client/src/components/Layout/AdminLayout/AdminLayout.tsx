import { Navigate, Outlet } from "react-router-dom"

function getCookie(name:string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1]
}

export default function AdminLayout() {
  const token = getCookie("access_token")
  console.log(token)
  return(
    <>
    {token ? ( <Outlet />) : (<Navigate to='/login'/>)}
    </>
  )
}
