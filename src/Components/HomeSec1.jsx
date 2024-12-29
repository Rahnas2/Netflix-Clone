
import { MdKeyboardArrowRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function HomeSec1() {
    const {user} = UserAuth()
    return (
        <section className='flex-1 flex flex-col gap-4  justify-center items-center text-white '>
            <h1 className='font-nsans-bold text-6xl max-w-2xl text-center font-black leading-tight'>Unlimited movies, TV shows and more</h1>
            <p className='text-lg '>Starts at ₹149. Cancel at any time.</p>
            <button className='rounded-sm px-4 py-2 text-xl bg-red-600 m-3 transform duration-500  hover:scale-105'>
                {user?.email ? <span className='mr-3'>Get Movies</span> : <Link to="/signup"><span className='mr-3'>Finish Sign-Up</span></Link>}
                <MdKeyboardArrowRight className='inline text-xl' />
            </button>
        </section>
    )
}

export default HomeSec1