import React, { useEffect, useState } from 'react'
import { Link,useParams ,useNavigate } from 'react-router-dom';
import "../adduser/add.css";
import axios from "axios";
import toast from 'react-hot-toast';
export default function Edit() {

    const users={
        title:"",
        description:"",
        status:""
    }

    const {id} =useParams();
    const navigate=useNavigate();
    const [user,setUser]=useState(users);

    const inputChangeHandler =(e) =>{
        const {name,value} =e.target;
        setUser({...user,[name]:value});
    }

    useEffect (()=>{
      axios.get (`http://localhost:5000/api/getone/${id}`)
      .then((response) =>{
      setUser(response.data)
      })
      .catch((error)=>{
        console.log(error);
      })
    },[id])

    const submitForm =async(e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/update/${id}`,user)
         .then((response)=>{
            toast.success(response.data.msg,{position:"top-right"})
            navigate("/")
        
         }).catch(error =>console.log(error))
    }

  return (
    <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Update</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className='inputGroup'>
                    <label htmlfor="title">Title</label>
                    <input type="text" value={user.title} onChange={inputChangeHandler} id="title" name="title" autocomplete="off" placeholder='Title' />

                </div>
                <div className='inputGroup'>
                    <label htmlFor="description">Description</label>
                    <textarea id="description"  value={user.description} onChange={inputChangeHandler} name="description" autoComplete="off" placeholder='Description'></textarea>
                </div>

                <div className='inputGroup'>
                    <label htmlFor="status">Status</label>
                    <select id="status" value ={user.status} onChange={inputChangeHandler} name="status" defaultValue="pending">
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="inputGroup">

                    <button type="submit">Update Information</button>
                </div>

            </form>

        </div>
  )
}
