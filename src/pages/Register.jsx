import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
export default function Register() {

  const form = useForm();
  const {register} = form;

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-blue-dark">
      <form className="w-3/4 h-2/4 flex flex-col text-center justify-between items-center p-10  bg-blue rounded-md md:w-2/4">
          <label className=" text-yellow font-medium " htmlFor="number" >Number</label>
          <input className="rounded bg-blue border shadow-sm px-1 focus:outline-none focus:border-blue-light" type="number" name="number" id="number" {...register("number")}></input>

          <label className="text-yellow font-medium"  htmlFor="name">Username</label>
          <input className="rounded bg-blue border shadow-sm px-1 focus:outline-none focus:border-blue-light" type="text" id="name" {...register("name")}></input>

          <label className="text-yellow font-medium"  htmlFor="password">Password</label>
          <input className="rounded bg-blue border shadow-sm px-1 focus:outline-none focus:border-blue-light" type="password" name="password" id="password" {...register("password")}></input>

          <label className="text-yellow font-medium"  htmlFor="location">location</label>
          <input className="rounded bg-blue border shadow-sm px-1 focus:outline-none focus:border-blue-light" type="text" name="location" id="location" {...register("location")}></input>

          <label className="text-yellow font-medium" >gender</label>
          <select type="radio" className="rounded bg-blue border shadow-sm px-1 focus:outline-none focus:border-blue-light" {...register("gender")}>
              <option className=" aria-selected:bg-yellow" value="male">male</option>
              <option value="female">female</option>
            </select>
      </form>

      <Link  to="../login">already registered? <span className="text-yellow underline"> log in.</span></Link>
    </div>
  )
}
