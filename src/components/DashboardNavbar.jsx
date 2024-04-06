import { NavLink } from "react-router-dom"




const DashBoardNavbar = () => {
  return (
    <nav className="flex justify-between items-center text-center fixed z-50 w-full bg-white px-6 lg:px-10 pt-4 pb-2">
      <NavLink href="/" >
        <img src="src/assets/SVG/logo.svg" alt="logo" width={100} height={50} />
      </NavLink>

      <div className="flex items-center justify-center gap-4">
        <h2>Hi, Folaranmi</h2>
        <img src="src/assets/SVG/dashboard-user-icon.svg" alt="Dasboard usericon and text" width={50} height={30} />
      </div>
    </nav>
  )
}

export default DashBoardNavbar