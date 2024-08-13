import axios from "axios";

const API_URL='http://127.0.0.1:8080/users';

// Add user
export const addUser=async(data)=>{
    try{
        return await axios.post(API_URL,data);
    }catch(error){
        console.log('error while adding user ',error.message);
    }   
}

// Alluser api

export const allUser=async()=>{
    try{
        return await axios.get(API_URL);
    }catch(error){
        console.log('error while adding user ',error.message);
    }   
}

// get single data

export const getSingleUser=async(data)=>{
    try{
        return await axios.get(`${API_URL}/${data}`);
    }catch(error){
        console.log('error while getting single User ',error.message);
    }   
}

// edit User

export const editUser=async(data,id)=>{
    try{
        return await axios.put(`${API_URL}/${id}`,data);
    }catch(error){
        console.log('error while editing user ',error.message);
    }   
}

// Delete User

export const deleteUser=async(id)=>{
    try{
        return await axios.delete(`${API_URL}/${id}`);
    }catch(error){
        console.log('error while deleting user ',error.message);
    }   
}