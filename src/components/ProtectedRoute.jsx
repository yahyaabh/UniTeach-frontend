
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ProtectedRoute({children}) {
    
    const navigate = useNavigate();
    const id = sessionStorage.getItem("id");
    

    useEffect(() => {
    if(id == null) {
        return navigate("/login")
    }}
    ,[id,navigate])

    return (
        children
    )
    
  

}
