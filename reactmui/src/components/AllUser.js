import { Button, DialogContent, Dialog, DialogTitle ,styled, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { allUser ,deleteUser } from '../service/api'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';


const StyledTable=styled(Table)`
width:90%;
margin:50px 0 0 50px;
`
const THead=styled(TableRow)`
&>th{
font-size:20px;
background-color:#000000;
color:#ffffff}`

const AllUser = () => {
  const [users,setUser]=useState([]);

  const [selectedUser,setSelectedUser]=useState(null);
  const [openDialog,setOpenDialog]=useState(false);
  
  useEffect(()=>{
    getUserDetails();
  },[]);

  const getUserDetails=async()=>{
    let response=await allUser();
    console.log(response);
    setUser(response.data);
  };

  const deleteUserData =async(id)=>{
    window.confirm("Are you sure you want to delete this user");
    await deleteUser(id);
    getUserDetails();
  }

  const handleVisiblityClcik=(user)=>{
    setSelectedUser(user);
    setOpenDialog(true);
  }

    const handleCloseDialog=()=>{
      setOpenDialog(false)
    }

  return (
    <div>
    <StyledTable>
      < TableHead>
        <THead>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>City</TableCell>
        <TableCell>ContactNo.</TableCell>
        <TableCell></TableCell>
        </THead>
      </ TableHead>
      <TableBody>
        {/* { Map function } */}
        {
          users.map(user=>(
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained' color="success" component={Link} to={`/edit/${user.id}`}>Edit </Button>&nbsp;&nbsp;
                <Button variant='contained' color='error' onClick={()=>deleteUserData(user.id)}>Delete</Button>&nbsp;&nbsp;
                <Button variant='contained' onClick={()=>handleVisiblityClcik(user)}>< VisibilityIcon/></Button>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </StyledTable>
    <Dialog onClose={handleCloseDialog} open={openDialog}>
    <DialogTitle>Set backup account</DialogTitle>
    <DialogContent>
      {selectedUser && (
        <div>
          <Typography>Name:{selectedUser.username}</Typography>
          <Typography>Email:{selectedUser.email}</Typography>
          <Typography>City:{selectedUser.city}</Typography>
          <Typography>ContactNo:{selectedUser.phone}</Typography>
        </div>

      )}
    </DialogContent>
    </Dialog>
    </div>
  )
}

export default AllUser
