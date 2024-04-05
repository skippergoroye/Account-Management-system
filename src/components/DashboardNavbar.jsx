import { NavLink } from "react-router-dom"

const DashBoardNavbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-white px-6 lg:px-10 pt-4 lg:pt-8 max-lg:py-5">
      <NavLink href="/" >
        <img src="src/assets/SVG/logo.svg" alt="logo" width={100} height={50} />
      </NavLink>
    </nav>
  )
}

export default DashBoardNavbar