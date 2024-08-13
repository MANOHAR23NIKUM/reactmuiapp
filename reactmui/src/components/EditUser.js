import { Button,FormControl, FormGroup, InputLabel,Input, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser, getSingleUser } from '../service/api'

const Container=styled(FormGroup)`
width:50%;
margin:5% 0 0 25%;
& >div{
margin-top:20px;
}
`
const initialValue={
    username:'',
    email:'',
    city:'',
    phone:'',
}
const EditUser = () => {
    const [user,setUser]=useState(initialValue);
   
    const navigate=useNavigate();

    const {id}=useParams();

    useEffect(()=>{
      getSingleUserData();
    },[]);

    const getSingleUserData=async()=>{
      let response=await getSingleUser(id);
      // console.log(response);
      setUser(response.data)
    }
    const onValueChange=(e)=>{
        e.preventDefault();
        setUser({...user,[e.target.username]:e.target.value});
        console.log(user);
    } 

const addUserDetails=async()=>{
    // api call
    // await addUser(user);
    await editUser(user,id);
    navigate('/all')
}
  return (
    <div>
        <Container>

        <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='username' value={user.username}/>
            </FormControl>

            <FormControl>
                <InputLabel>Email:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email' value={user.email}/>
            </FormControl>

            <FormControl>
                <InputLabel>City:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='city' value={user.city}/>
            </FormControl>

            <FormControl>
                <InputLabel>Contact No:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={user.phone}/>
            </FormControl>

            <Button variant="contained" onClick={addUserDetails}>Submit</Button>
        </Container>
    </div>
  )
}

export default EditUser
