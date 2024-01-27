import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import UserDisplay from "../components/UserDisplay";
export default function Search() {
    const [users,setUsers] = useState([]);

    const form = useForm();
    const {register , handleSubmit, formState} = form;
    const {errors} =formState;

    const submitSearch = async(data) => {
        const res = await fetch("http://localhost:3000/search",{method:"POST",headers:{"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
    message:data.message
  })
  })


     const searchRes = await res.json();
     console.log(searchRes)
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
        <p className="text-sm text-red-600 ">{errors.number?.message}</p>
        <button className="py-1 bg-yellow text-blue-dark rounded-md"><FaSearch/></button>
      </form>
      <div className="w-full flex justify-center items-center">
        {users.length != 0 &&
        <UserDisplay matching={users}/>
        }
      </div>
    </div>
  )
}