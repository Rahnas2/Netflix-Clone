
import { IoLanguageSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";

import { Link } from "react-router-dom";

import Button from "./Button";


import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function HomeNav() {
    const {user, logOut} = UserAuth()

    const handleLogOut = async() =>{
        try {
            await logOut()
            toast.success('logout succssfully')
        } catch (error) {
            console.error(error)
            toast.error('something went wrong please try again')
        }
    }
    return (
        <nav className='flex justify-between px-10 py-5 m-0'>

            <Link to="/"><h1 className='m-2 sm:m-0 font-nsans-bold text-3xl sm:text-5xl text-red-600'>NETFLIX</h1></Link>
            <div className='text-white '>
                <button className='border rounded-md px-4 py-1.5 m-6 transform duration-500  hover:scale-105'>
                    <span className='mr-1'><IoLanguageSharp className='inline' /></span>
                    <span className='hidden sm:inline mr-2'>English</span>
                    <span><MdOutlineArrowDropDown className='inline' /></span>
                </button>
                {user?.email ? (
                 <Button text="Log Out"  onClick={handleLogOut}/>
                ):<Link to='/login'><Button text="Log In"/></Link>}
                
            </div>

        </nav>
    )
}

export default HomeNav