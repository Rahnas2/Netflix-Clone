import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { AuthContextProvider } from "./context/AuthContext"

import ProtectedRoute from "./security/protectedRoute"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
      <AuthContextProvider>
        <Routes>

          <Route path="/login" element={
            <ProtectedRoute>
              <Login />
            </ ProtectedRoute >
          } />

          <Route path="/signup" element={
            <ProtectedRoute>
              <Signup />
            </ProtectedRoute>} />

          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ToastContainer />
      </AuthContextProvider>

    </>
  )
}

export default App
