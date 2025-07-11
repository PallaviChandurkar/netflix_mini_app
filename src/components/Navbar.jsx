import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="w-[1200px] mx-auto my-5 flex items-center justify-between">
                <Link to="/">
                    <img className="w-52" src="src\assets\Netflix_Logo_PMS.png" alt="Logo" />
                </Link>
                <Link to=""><p className="text-white text-lg">Login</p></Link>
            </div>
        </>
    )
}

export default Navbar;