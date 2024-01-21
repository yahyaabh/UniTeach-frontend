import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Login() {

  const navigate = useNavigate();
  const form = useForm();
  const {register , control, handleSubmit, formState} = form;
  const {errors} =formState

  const onSubmit = async(data) => {
    const res = await fetch("http://localhost:3000/login" ,{method:'POST',headers:{"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      number: data.number,
      password:data.password,
    })
  })
  if( res.statusText == "Bad Request") {
    toast.error("the number is not registered")
  }

  else if(res.status == 200) {
    return navigate("/users")
  }
  else if(res.statusText == "Unauthorized") {
    toast.error("password is wrong please ty again.")
  }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-blue-dark">
      <form className="w-3/4 h-3/4 flex flex-col text-center justify-center items-center p-10  bg-blue rounded-md md:w-2/4" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label className=" text-yellow font-medium " htmlFor="number" >Number</label>          
          <input className="rounded bg-blue border shadow-sm px-1 focus:outline-none focus:border-blue-light" type="number" name="number" id="number" 
          {...register("number" ,{required:"phone number is required"})}></input>
          <p className="text-sm text-red-600 ">{errors.number?.message}</p>

          <label className="text-yellow font-medium"  htmlFor="password">Password</label>
          <input className="rounded bg-blue border shadow-sm px-1 focus:outline-none focus:border-blue-light" type="password" name="password" id="password" {...register("password", {required:"password is required"})}></input>
          <p className="text-sm text-red-600 ">{errors.password?.message}</p>

          
          
            <button className="bg-yellow p-1 px-3 my-2 text-blue">login</button>
      </form>
      <DevTool control={control}/>
      <Link  to="../register">don't have an account? <span className="text-yellow underline"> sign up.</span></Link>
    </div>
  )
}
