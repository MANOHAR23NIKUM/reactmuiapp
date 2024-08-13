import { Button,FormControl, FormGroup, InputLabel,Input, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { addUser } from '../service/api'
import { useNavigate } from 'react-router-dom'

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
};

const AddUser = () => {
    const [user,setUser]=useState(initialValue);

    // const [formData,setFormData]=useState(initialValue);
    const[errors,setErrors]=useState({});
   
    const navigate=useNavigate();

    const onValueChange=(e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
   
    } 


const validateForm=(data)=>{
    const errors={};

    if (!data.username.trim()){
        errors.username="Username is required";
    }
    
    if(!data.email.trim()){
        errors.email="Email is required";
    }else if (!/^\S+@\S+\.\S+$/.test(data.email)){
        errors.email="Email is Invalid"
    }
    
    if(!data.city.trim()){
        errors.city="City is required";
    }
    
    if(!data.phone.trim()){
        errors.phone="Contact no  is required";
    }else if (!/^\d{10}$/.test(data.phone)){
        errors.phone="Conatct number must be 10 digits"
    }

    return errors;
        
};


const addUserDetails=async()=>{
   
    // api call
    const newErrors=validateForm(user);
    setErrors(newErrors);
    
    // Check if there is no errors
    if (Object.keys(newErrors).length === 0){
        await addUser(user);
        alert("Form Submitted Successfully");
        navigate('/all')
    }else{
        alert("form Submission Failed due to valiadtion errors");
    }
   
}


return (
    <div>
        <Container>

        <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Username:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='username' value={user.username}/>
                {errors.username && <span className='error-message' style={{color:'red'}}>{errors.username}</span>}
            </FormControl>

            <FormControl>
                <InputLabel>Email:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email' value={user.email}/>
                {errors.email && <span className='error-message' style={{color:'red'}}>{errors.email}</span>}
            </FormControl>

            <FormControl>
                <InputLabel>City:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='city' value={user.city}/>
                {errors.city && <span className='error-message' style={{color:'red'}} >{errors.city}</span>}
            </FormControl>

            <FormControl>
                <InputLabel>Contact No:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={user.phone}/>
                {errors.phone && <span className='error-message' style={{color:'red'}} >{errors.phone}</span>}
            </FormControl>

            <Button variant="contained" onClick={addUserDetails}>Submit</Button>
        </Container>
    </div>
  )
}

export default AddUser
