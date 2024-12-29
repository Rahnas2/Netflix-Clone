import { UserAuth } from "../context/AuthContext"
import Button from "./Button"
import Input from "./Input"

import { Link } from "react-router-dom"

import { useState } from "react"

import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import validator from 'validator'


function LoginBox() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [remeber, setRemember] = useState(false)

    const {user, logIn} = UserAuth()

    const navigate = useNavigate()

    const handleRember = () =>{
        setRemember(!remeber)
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = async () =>{

        if(!validator.isEmail(email)) return toast.warning('invalid email')

        if(validator.isEmpty(password,{ignore_whitespace: true})) return toast.warning('password is required')   

        try {
            await logIn(email, password)
            toast.success('login successfully')
            navigate('/')
        } catch (error) {
            console.log('error',error)
            toast.error('invalid email or password')
        }
    }

    return (
        <div className='flex flex-col self-center py-12 px px-16 max-w-md min-h-[645px] bg-[rgba(0,0,0,0.7)] text-white'>

            <h1 className="font-nsans-bold text-[2rem] font-extrabold mb-6">Sign In</h1>

            <Input type="text" placeholder="Email or mobile number" value={email} onChange={handleEmail} />

            <Input type="password" placeholder="Password" value={password} onChange={handlePassword} />

            <Button text="Sign In"  className="rounded" onClick={handleSubmit} /> 
            
            <p className="text-center mb-3 font-nsans-regular text-[rgba(255,255,255,0.7)] text-base">OR</p>

            <Button text="Use a sign-in code" className="bg-[hsl(0,2%,37%)] bg-opacity-50 rounded"/>

            <p className="text-center font-nsans-light my-3 hover:underline hover:text-[rgba(255,255,255,0.7)]"><a href="">Forgot Password?</a></p>

            <div className="mt-4 ">
                <Input type="checkbox" className="" checked={remeber} setRemember={handleRember} />
            </div> 

            <div>
                <p className="text-[rgba(255,255,255,0.7)] text-base font-nsans-regular mb-5">New to Netflix?
                    <Link to="/signup"><span className="text-white font-nsans-medium">Sign up now.</span></Link>
                </p>
            </div>

            <div className="text-[13px]">
                <span className="text-[rgba(255,255,255,0.5)] font-nsans-light text-[13px]">This page is protected by Google reCAPTCHA to ensure you're not a bot.&nbsp;</span>
                <a className="font-nsans-light text-[#0071eb] text-inherit hover:underline" href="#">Learn more.</a> 
            </div>

        </div>
    )
}

export default LoginBox