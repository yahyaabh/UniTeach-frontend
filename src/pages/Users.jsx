import { Link } from "react-router-dom";
import {  FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import UserDisplay from "../components/UserDisplay"



export default function Users() {
  const [message , setMessage] = useState("");
  const [matching, setMatching] = useState([])
  
  
   useEffect( () => { const getUsersInfo = async() => {
      const res = await fetch("https://uniteach-api.onrender.com/getInfo",{method:"POST",headers:{"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      id:sessionStorage.getItem("id")
    })
    })

    const data = await res.json();
    const msg = data.needs
    setMessage(msg)
  }
  getUsersInfo()
   } ,[])  

  


  useEffect ( () => {const getMatches = async () => {
    const res = await fetch("https://uniteach-api.onrender.com/search",{method:"POST",headers:{"Content-type": "application/json; charset=UTF-8"},
  body: JSON.stringify({
    message:message
  })
  })
  const data = await res.json();
  setMatching(data);
  }
  

  getMatches() } ,[message])



  return (
    <div className="h-screen w-screen bg-blue">
      <header className=" h-1/4 flex flex-row justify-around items-center">
        <button className="bg-yellow border-white text-blue"><Link className="flex flex-col justify-center items-center" to=".."><IoIosArrowBack/>Go back</Link></button>
        <button className="bg-yellow border-white text-blue"><Link className="flex flex-col justify-center items-center" to="../profile"><CgProfile/>Profile</Link></button>
        <button className="bg-yellow border-white text-blue"><Link className="flex flex-col justify-center items-center" to="../search"><FaSearch/>search</Link></button>
      </header>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="mb-2 font-semibold">Users with skills you need:</h1>
        <div className="w-full flex justify-center items-center">
        {matching && 
          <UserDisplay matching={matching}/>
         }
        </div>
      </div>

    </div>
  )
}
