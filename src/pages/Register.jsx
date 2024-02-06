import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Load from "../components/Load";
export default function Register() {

  const navigate = useNavigate();
  const form = useForm();
  const {register , handleSubmit, formState} = form;
  const [loading,setLoading] = useState(false)
  const {errors} =formState

  const onSubmit = async(data) => {
    setLoading(true)
    const res = await fetch("https://uniteach-api.onrender.com/register" ,{method:'POST',headers:{"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      number: data.number,
      name: data.name,
      password:data.password,
      location:data.location,
      gender:data.gender
    })
  })
  setLoading(false)
  if( res.statusText == "Bad Request") {
    toast.error("number already registered")
  }
  else if(res.status == 200) {
    const data = await res.json()
    sessionStorage.setItem("id",data.id)
    return navigate("/users")
  }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-blue-dark">
      <form className="w-3/4 h-3/4 flex flex-col text-center justify-between items-center p-10  bg-blue rounded-md md:w-2/4" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label className=" text-yellow font-medium " htmlFor="number" >Number</label>          
          <input className="rounded bg-blue border shadow-sm px-1 focus:outline-none focus:border-blue-light" type="number" name="number" id="number" 
          {...register("number" ,{required:"phone number is required"})}></input>
          <p className="text-sm text-red-600 ">{errors.number?.message}</p>

          <label className="text-yellow font-medium"  htmlFor="name">Username</label>
          <input className="rounded bg-blue border shadow-sm px-1 focus:outline-none focus:border-blue-light" type="text" id="name" {...register("name" ,{required:"username is required"})}></input>
          <p className="text-sm text-red-600 ">{errors.name?.message}</p>

          <label className="text-yellow font-medium"  htmlFor="password">Password</label>
          <input className="rounded bg-blue border shadow-sm px-1 focus:outline-none focus:border-blue-light" type="password" name="password" id="password" {...register("password", {required:"password is required"})}></input>
          <p className="text-sm text-red-600 ">{errors.password?.message}</p>

          <label className="text-yellow font-medium"  htmlFor="location">location</label>
          <input className="rounded bg-blue border shadow-sm px-1 focus:outline-none focus:border-blue-light" type="text" name="location" id="location" {...register("location",{required:"location is required"})}></input>
          <p className="text-sm text-red-600 ">{errors.location?.message}</p>

          <label className="text-yellow font-medium" >gender</label>
          <select type="radio" className="rounded bg-blue border shadow-sm px-1 focus:outline-none focus:border-blue-light" {...register("gender",{required:"gender is required"})}>
              <option className=" aria-selected:bg-yellow" value="male">male</option>
              <option value="female">female</option>
            </select>
            <p className="text-sm text-red-600 ">{errors.gender?.message}</p>
            {loading?
            <Load/>:
            <button className="bg-yellow p-1 px-3 my-2 text-blue">register</button>}
      </form>
      
      <Link  to="../login">already registered? <span className="text-yellow underline"> log in.</span></Link>
    </div>
  )
}
