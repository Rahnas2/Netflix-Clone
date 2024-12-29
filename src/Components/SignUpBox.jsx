
import Input from "./Input"

import Button from "./Button"

import { Link } from "react-router-dom"

import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { UserAuth } from "../context/AuthContext"
import { toast } from "react-toastify"

import validator from 'validator'



function SignUpBox() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [remeber, setRemember] = useState(false)

    const {user, SignUp} = UserAuth()

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

        if(!validator.isLength(password, {min: 6}))   return toast('password should be atleast 6 characters') 

        try {
            await SignUp(email, password)
            toast.success('signup successfullyl')
            navigate('/')

        } catch (error) {
            console.error(error)
            toast.error('something went wrong')
        }
    }

    return (
        <div className=' flex flex-col self-center py-12 px px-16 max-w-md min-h-[545px] bg-[rgba(0,0,0,0.7)] text-white'>
            <h1 className="font-nsans-bold text-[2rem] font-extrabold mb-6">Sign Up</h1>

            <Input type="text" placeholder="Email or mobile number" value={email} onChange={handleEmail} />

            <Input type="password" placeholder="Password" value={password} onChange={handlePassword} />

            <Button text="Sign Up" className="rounded " onClick={handleSubmit} />

            <div className="mt-4 ">
                <Input type="checkbox" className="" remeber={remeber} setRemember={handleRember} />
            </div>

            <div>
                <p className="text-[rgba(255,255,255,0.7)] text-base font-nsans-regular mb-5">Already Subscribed to Netflix?
                    <Link to="/login"><span className="text-white font-nsans-medium">Sign In</span></Link>
                </p>
            </div>

        </div>
    )
}

export default SignUpBox