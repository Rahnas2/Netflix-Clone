import { Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"


function ProtectedRoute({children}) {
    const {user} = UserAuth()

    if(!user || !user.email){
        console.log('hello')
        return children
    } 

    return <Navigate to="/" />
}

export default ProtectedRoute