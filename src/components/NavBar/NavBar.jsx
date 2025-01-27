import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="flex flex-col justify-center bg-slate-500 text-white">
            <Link to="/"className="flex justify-between mx-10">
            <h3 className="text-center text-4xl">ASDF</h3>
            </Link>


            <div className="flex justify-evenly">
            <NavLink to={"/category/celular"}>Samsung</NavLink>
            <NavLink to={"/category/tablet"}>Xiaomi</NavLink>
            <NavLink to={"/category/notebook"}>Motorola</NavLink>
            <NavLink>Mas...</NavLink>
            
            
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar