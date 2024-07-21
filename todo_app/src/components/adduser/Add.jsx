import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios";
import './add.css';
import {useState} from 'react';
import toast from 'react-hot-toast';

export default function Add() {

  const users ={
    title:"",
    description:"",
    status:""
  }
    const [user,setUser] =useState(users);
    const navigate=useNavigate();
    const inputHandler =(e) =>{
        const{name,value} =e.target;
         setUser({...user,[name]:value});
         
    }

    const submitForm =async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:5000/api/create",user)
         .then((response)=>{
            toast.success(response.data.msg,{position:"top-right"})
            navigate("/")
        
         }).catch(error =>console.log(error))
    }
    return (
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Add new project</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className='inputGroup'>
                    <label htmlfor="title">Title</label>
                    <input type="text" onChange={inputHandler} id="title" name="title" autocomplete="off" placeholder='Title' />

                </div>
                <div className='inputGroup'>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" onChange={inputHandler} name="description" autoComplete="off" placeholder='Description'></textarea>
                </div>

                <div className='inputGroup'>
                    <label htmlFor="status">Status</label>
                    <select id="status" onChange={inputHandler} name="status" defaultValue="pending">
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="inputGroup">

                    <button type="submit">ADD project</button>
                </div>

            </form>

        </div>
    )
}
