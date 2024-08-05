import { Outlet } from "react-router-dom"
import "./dasboardLayout.css"

const DasboardLayout = () => {
  return (
    <div className="dasboardLayout">
      <div className="menu">MENU</div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default DasboardLayout