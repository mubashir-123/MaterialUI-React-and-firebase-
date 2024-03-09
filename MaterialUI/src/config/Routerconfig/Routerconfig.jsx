import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../../pages/Home/Home'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import ResponsiveAppBar from "../../components/ResposiveAppBar"
import Protectedroutes from "./Protectedroutes"
import { Typography } from "@mui/material"

const Routerconfig = () => {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<Protectedroutes components={<Home />} />} />
          <Route path='Login' element={<Login />} />
          <Route path='Register' element={<Register />} />
          <Route path='*' element={<Typography>No Page Found 404</Typography>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routerconfig