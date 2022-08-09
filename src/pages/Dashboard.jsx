import React from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { handleGitUserFetch } from '../redux/gitProfiles/action'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { GitUserCard } from '../components/GitUserCard'
export const Dashboard = () => {
  const dispatch=useDispatch()
  const [name, setName]=useState("")
  const  {gitUserData} =useSelector(state=>state.GitUser)

  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <Box width="350px" padding={"30px"}> 
        <Input  value={name} onChange={(e)=>setName(e.target.value)} placeholder='Please Enter Search key' />
      <Button onClick={()=>{dispatch(handleGitUserFetch(name))
      setName("")}}> Search </Button>
      </Box>
      <div>
        {

          (gitUserData?.map(ele=><GitUserCard userDetails={ele}/>))
        }
      </div>     

    </div>
  )
}
