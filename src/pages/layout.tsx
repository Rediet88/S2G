import { Outlet } from "react-router-dom"
import Home from "./home"


const layout = () => {
  return (
    <div>
        <Home/>
        <Outlet/>

    </div>
  )
}

export default layout