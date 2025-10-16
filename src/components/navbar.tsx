import Link from "next/link"
import SearchBar from "./searchbar"
import { Bell, Home, ShoppingCart } from "lucide-react"
import ShoppingCartIcon from "./shoppingcarticon"

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
            {/* LEFT */}
            <Link href="/" className="flex items-center">
                <p className="text-lg md:text-2xl font-bold italic text-gray-800 tracking-wider font-serif">hazzy</p>
            </Link>
            {/* RIGHT */}
            <div className="flex items-center gap-6">
                <SearchBar key="search" />
                <Link href="/" key="home">
                    <Home className="w-4 h-4 text-gray-600" />
                </Link>
                <Bell className="w-4 h-4 text-gray-600" key="bell" />
                <ShoppingCartIcon key="cart" />
                <Link href="/signin" key="signin">
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
