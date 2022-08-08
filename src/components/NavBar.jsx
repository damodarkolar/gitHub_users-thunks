import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const NavBar = () => {

    const {token}=useSelector(state=>state.Auth)
    const navigate=useNavigate();

    React.useEffect(()=>{
        if(!token){
            navigate("/login")
        }
    },[token])

  return (
    <div style={{display:"flex", justifyContent:"space-around", padding:"20px"}}>
        <Box bg='tomato' w='100%' p={4} color='white'>
            <Link to="/">DashBoard</Link>
            {
                !!token?(<Button>Log Out</Button>):(<><Link to="/login"></Link>
            <Link to="/SignUp"></Link></>)
            }
                       
        </Box>
    </div>
  )
}
