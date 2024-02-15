
import { Link } from "react-router-dom"
import image  from "../assets/joanna-kosinska-1_CMoFsPfso-unsplash.jpg"
import image2 from "../assets/teachingpic.avif"
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Welcome = () => {
  return (
    <div className="w-full h-full bg-blue-dark flex justify-center items-center flex-col">
          <div className="h-2/4 md:w-3/4 md:h-4/5 relative">
            <img className="w-full h-full rounded-xl" src={image}></img>
            <div className="w-3/4 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-blue text-xl md:-translate-x-1/3 md:text-start md:w-2/4">
              <h1 className="font-bold  text-3xl py-4">Welcome to UNITEACH.</h1>
              <p className="text-lg">
                Uniteach was made for students to connect, help and benefit each others.
              </p>
              <button className="hidden md:inline bg-blue text-white my-3">
                <Link to="/users">register now</Link>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-evenly items-center px-2 mt-10 md:flex-row md:w-3/4">
            <p className="text-center text-sm md:text-xl font-mono">Find other students that can help you studying, help other students and study together!</p>
            <img className="rounded-xl my-3 w-full" src={image2}></img>
          </div>
          <footer className="flex justify-between items-center space-x-20 my-2">
            <a href="https://github.com/yahyaabh"><FaGithub className="text-yellow" size="2rem"/></a>
            <a href="https://x.com/Yahya_abh"><FaXTwitter className="text-yellow" size="2rem"/></a>
            <a href="https://www.linkedin.com/in/yahia-abh-a84142220/"><FaLinkedin className="text-yellow"  size="2rem"/></a>
          </footer>
    </div>
  )
}

export default Welcome

