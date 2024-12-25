import { FaCartShopping } from "react-icons/fa6";


const CartWidget = () => {
    return (
            <div className="bg-slate-700 px-2 py-2 rounded-lg hover:bg-slate-600" >
            <div className="flex justify-end relative" >
                <FaCartShopping size={22} />
                <span className="bg-black text-white rounded-full px-2 py-1 text-xs absolute top-4 left-4">5</span>
            </div>
            </div>
    )
}

export default CartWidget