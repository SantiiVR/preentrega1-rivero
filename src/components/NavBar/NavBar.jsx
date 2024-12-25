import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav className="flex flex-col justify-center bg-slate-500 text-white">
            <div className="flex justify-between mx-10">
            <h3 className="text-center text-4xl">ASDF</h3>
            <CartWidget/>
            </div>



            <div className="flex justify-evenly">
            <button>Samsung</button>
            <button>Xiaomi</button>
            <button>Motorola</button>
            <button>Mas...</button>
            
            
            </div>
            
        </nav>
    )
}

export default NavBar