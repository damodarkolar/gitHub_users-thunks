import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import React from 'react';
  
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { handleLoginFetch } from '../redux/auth/action';
  const userInput={
    email:"",
    password:""
  }
  export const Login=()=> {
    const dispatch=useDispatch()
    const [loginData, setLoginData]=React.useState(userInput);
    const {email, password}=loginData
    const {token}=useSelector(state=>state.Auth)
    const navigate=useNavigate()

    React.useEffect(()=>{
      if(!!token){
        navigate("/")
      }
      
    },[token])
    const handleOnChange=(e)=>{
      const {name, value}=e.target
      setLoginData(prev=>({...prev,[name]:value}))
    }
    const handleOnclick=()=>{
      console.log(loginData)
      dispatch(handleLoginFetch(loginData))
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input name="email" value={email} onChange={handleOnChange} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input name="password" value={password} onChange={handleOnChange} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                onClick={handleOnclick}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }