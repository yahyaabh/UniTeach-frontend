import { FaUserGraduate } from "react-icons/fa6";


export default function UserDisplay({matching}) {
  console.log(matching)
  return (
    <>
      {matching.map(match => (
      <div className="bg-blue-light border border-white rounded-lg text-yellow w-3/4 shadow-[3px_3px_3px_1px_rgba(255,255,255)]" key={match.id}>
        <div className="flex flex-row justify-start items-center  ">
          <FaUserGraduate size="2rem" className="text-2xl m-2 border-white border rounded-full p-1"/>
          <h1 className="text-lg font-bold">{match.name}</h1>
         </div>
         
         <div className="flex flex-col justify-center items-start ml-3">
          <p className="font-semibold">skills: <span className="text-white text-sm font-normal">{match.skills}</span></p>
          <p className="font-semibold">needs: <span className="text-white text-sm font-normal">{match.needs}</span></p>
         </div>
         <div className="flex flex-row justify-around items-start text-xs my-1 text-white">
          <p>{match.number}</p>
          <p>{match.location}</p>
          <p>{match.gender}</p>
         </div>
      </div>
      
      
      ))}
    </>
  )
}
