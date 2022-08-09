import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogOut } from '../redux/auth/action'
export const NavBar = () => {
    const dispatch=useDispatch();
    const {token}=useSelector(state=>state.Auth);
    const navigate=useNavigate();

    React.useEffect(()=>{
        if(!token){
            navigate("/login")
        }
    },[token])


  return (
    <div style={{display:"flex", justifyContent:"space-around", padding:"20px"}}>
        <Box bg='tomato' w='100%' p={4} color='white' display={"flex"} justifyContent="space-between">
            <Link to="/">DashBoard</Link>
            {
                !!token?(<Button onClick={ ()=>dispatch(handleLogOut()) } >Log Out</Button>):(<><div><Link to="/login">Login</Link>
            /<Link to="/signUp">Sign Up</Link></div></>)
            }
                       
        </Box>
    </div>
  )
}
