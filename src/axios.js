import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
export default function Axios() {
    const [userdata,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setData(response.data)
        })
    },[])
  return (
    <div>axios
        {userdata.map((data)=>{
            return(
                <div>
                    {data.name}
                </div>
            )
        })}
    </div>
  )
}

