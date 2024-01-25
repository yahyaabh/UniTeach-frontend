import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";

export default function Users() {
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
