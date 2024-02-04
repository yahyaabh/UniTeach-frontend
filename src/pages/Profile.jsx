import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";

export default function Profile() {
    const form = useForm();
    const {register , handleSubmit} = form;
    const [info, setInfo] = useState([])

    useEffect( () => { const getUsersInfo = async() => {
        const res = await fetch("https://uniteach-api.onrender.com/getInfo",{method:"POST",headers:{"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify({
        id:sessionStorage.getItem("id")
      })
      })
  
      const data = await res.json();
      setInfo(data)
    }
    getUsersInfo()
     } ,[])  

     const skillsSubmit = async(data) => {
        const skills = data.skills;
        

        const res = await fetch("https://uniteach-api.onrender.com/add/skills",{method:"POST",headers:{"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify({
        id:sessionStorage.getItem("id"),
        message:skills
      })
      })
      const results = await res.json();
      if(results.message == "Your skills have been added.") {
        toast.success(results.message)
      }

     }
     const needsSubmit = async(data) => {
        const needs = data.needs;
        

        const res = await fetch("https://uniteach-api.onrender.com/add/needs",{method:"POST",headers:{"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify({
        id:sessionStorage.getItem("id"),
        message:needs
      })
      })
      const results = await res.json();
      if(results.message == "Your needs have been added.") {
        toast.success(results.message)
      }

     }

  return (
    <div className="w-full h-screen bg-blue-dark flex flex-col  items-center">
      <header className="w-full h-1/4 flex flex-col justify-center items-center">
        <button className=" bg-white border-white text-blue"><Link className="flex flex-row justify-center items-center" to="../users"><IoIosArrowBack/></Link></button>
        <h1 className=" bg-yellow p-2 border border-white text-blue-dark rounded-md my-2">{info.name}'s profile</h1>
      </header>
      <form onSubmit={handleSubmit(skillsSubmit)} className="border border-white rounded-md p-2 flex flex-col items-center border-2">
            <label htmlFor="skills">add your skills:</label>
            <input {...register("skills")} name="skills" id="skills" type="text" className="bg-white my-2 text-blue-dark font-medium px-1  focus:border-yellow focus:outline-none rounded-md"></input>
            
            <button className="bg-yellow text-blue-dark my-2 py-0">add</button>
      </form>

      <form onSubmit={handleSubmit(needsSubmit)} className="border border-white rounded-md p-2 flex flex-col items-center border-2 my-2">
            <label htmlFor="needs">add your needs:</label>
            <input {...register("needs")} name="needs" id="needs" type="text" className="bg-white my-2 text-blue-dark font-medium px-1  focus:border-yellow focus:outline-none rounded-md"></input>
            
            <button className="bg-yellow text-blue-dark my-2 py-0">add</button>
      </form>
      
    </div>
  )
}
