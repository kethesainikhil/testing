import React, { useEffect, useState } from 'react'
import axios from "../../api/axios"
const Details = () => {
const [details,setDetails] = useState([]);

const fetchDetails = async () =>{
    const res = await axios.get("/contacts");
    setDetails(res.data)
}
useEffect(()=>{
    fetchDetails();
},[])

return (
    <div>
        {
            details.map((contact)=>{
            const {name,email} = contact
            return(
                <div>
                    <h1>name:{name}</h1>
                    <h3>email:{email}</h3>
                </div>
            )
            })
        }
    </div>
  )
}

export default Details
