import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import UserDisplay from "../components/UserDisplay";
import Load from "../components/Load";
export default function Search() {
    const [users,setUsers] = useState([]);
    const [loading, setLoading] = useState(false)

    const form = useForm();
    const {register , handleSubmit} = form;
    

    const submitSearch = async(data) => {
      setLoading(true)
        const res = await fetch("https://uniteach-api.onrender.com/search",{method:"POST",headers:{"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
    message:data.message
  })
  })
  setLoading(false)


     const searchRes = await res.json();
        setUsers(searchRes)
        
        
    }


  return (
    <div className="flex flex-col justify-start items-center h-screen w-screen bg-blue-dark">
      <header className=" h-1/4 flex flex-row justify-around items-center">
      <button className="bg-white border-white text-blue "><Link className="flex flex-row justify-center items-center" to="../users"><IoIosArrowBack/></Link></button>
      </header>
      <h1>Search for the skills or needs you want :</h1>
      <form className="flex flex-row justify-center items-center" onSubmit={handleSubmit(submitSearch)}>
        <input {...register("message", {required:"Field can't be empty."})} name="message" id="message" className="bg-white my-2 text-blue-dark font-medium px-1  focus:border-yellow focus:outline-none rounded-md mx-1 "></input>
        
        <button className="py-1 bg-yellow text-blue-dark rounded-md"><FaSearch/></button>
      </form>
      {loading? <Load/> :
      <div className="w-full flex justify-center items-center">
        {users.length != 0 ?
        <UserDisplay matching={users}/>
        :
        <p className="text-yellow">no users</p>
        }
      </div>
}
    </div>
  )
}
