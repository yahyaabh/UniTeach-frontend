import { Link } from "react-router-dom";
import {  FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import Load from "../components/Load";
import UserDisplay from "../components/UserDisplay"



export default function Users() {
  const [message , setMessage] = useState("");
  const [matching, setMatching] = useState([])
  const [loading,setLoading] = useState(false)
  
  
   useEffect( () => { const getUsersInfo = async() => {
    setLoading(true)
      const res = await fetch("https://uniteach-api.onrender.com/getInfo",{method:"POST",headers:{"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      id:sessionStorage.getItem("id")
    })
    })
    setLoading(false)

    const data = await res.json();
    const msg = data.needs
    setMessage(msg)
  }
  getUsersInfo()
   } ,[])  

  


  useEffect ( () => {const getMatches = async () => {
    //send req to search for skills that match your needs
    let cleanedMessage = message.replace(/[.,]|(?:\band\b|\bor\b)/g, '').replace(/\s$/,"").replace(/\s+/g, '|');
    const res = await fetch("https://uniteach-api.onrender.com/search/skills",{method:"POST",headers:{"Content-type": "application/json; charset=UTF-8"},
  body: JSON.stringify({
    message: cleanedMessage
  })
  })
  const data = await res.json();
  setMatching(data);
  }
  

  getMatches() } ,[message])



  return (
    <div className="h-screen w-screen bg-blue">
      <header className=" h-1/4 flex flex-row justify-around items-center">
      <Link className="flex flex-col justify-center items-center" to=".."><button className="bg-yellow border-white text-blue flex flex-col justify-center items-center"><IoIosArrowBack/>Go back</button></Link>
        <Link className="flex flex-col justify-center items-center" to="../profile"><button className="bg-yellow border-white text-blue flex flex-col justify-center items-center"><CgProfile/>Profile</button></Link>
        <Link className="flex flex-col justify-center items-center" to="../search"><button className="bg-yellow border-white text-blue flex flex-col justify-center items-center"><FaSearch/>search</button></Link>
      </header>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="mb-2 font-semibold">Users that match with you:</h1>
        { loading? <Load/> :
        <div className="w-full flex flex-col justify-center items-center">
        {matching &&
          matching.length !=0 ?
          <UserDisplay matching={matching}/>
            : 
          <p className="text-yellow">No macthes for your needs.</p>
         }
        </div>
} 
      </div>

    </div>
  )
}
