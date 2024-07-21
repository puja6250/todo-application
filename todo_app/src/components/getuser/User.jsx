import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast"
import "../adduser/add.css";
export default function User() {

    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:5000/api/getall")
            setUsers(response.data);
        }
        fetchData();
    }, [])

    const deleteUser =async(userId) =>{
  await axios.delete(`http://localhost:5000/api/delete/${userId}`)
  .then((responses) =>{
   setUsers((prevUser) =>prevUser.filter((user)=>user._id !==userId))
   toast.success(responses.data.msg,{position:'top-right'})

  })
  .catch((error) =>{
    console.log(error);
  })
    }
    return (
        <div className='userTable'>
            <Link to={"/add"}>Add</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{index+1}</td>
                                    <td>{user.title}</td>
                                    <td>{user.description}</td>
                                    <td>{user.status}</td>
                                    <td>
                                        <button onClick={()=>deleteUser(user._id)}>Delete</button>
                                        <Link to={`/edit/`+user._id}>Edit</Link>
                                    </td>
                                </tr>

                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
