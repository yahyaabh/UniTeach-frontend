import { Link } from "react-router-dom";
import {  FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";




export default function Users() {
  const [message , setMessage] = useState("");
  const [matching, setMatching] = useState([])

  useEffect(() => {
    const getUsersInfo = async() => {
      const res = await fetch("http://localhost:3000/getInfo",{method:"POST",headers:{"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      id:sessionStorage.getItem("id")
    })
    })

    const data = await res.json();
    const msg = data.needs
    setMessage(msg)
  }
  getUsersInfo()
  },[message])

  useEffect(() => {
    const getMatches = async () => {
      const res = await fetch("http://localhost:3000/search",{method:"POST",headers:{"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      message:message
    })
    })
    const data = await res.json();
    setMatching(data);
    }
    

    getMatches()
  },[message])

  console.log(matching)
  return (
    <div className="h-screen w-full bg-blue">
      <header className=" h-1/4 flex flex-row justify-around items-center">
        <button className="bg-yellow border-white text-blue"><Link to="../welcome"></Link><IoIosArrowBack/>Go back</button>
        <button className="bg-yellow border-white text-blue"><Link to="../profile"></Link><CgProfile/>Profile</button>
        <button className="bg-yellow border-white text-blue"><Link to="../search"></Link><FaSearch/>search</button>
        
      </header>

    </div>
  )
}
