import {Navigate,Outlet} from 'react-router-dom';
const useAuth=()=>{
   const token=localStorage.getItem('token')
   console.log("token in the protectedroutes",token)
   if(token){
      return true
   }else{
      return false
   }
}
const ProtectedRoutes =(props)=>{
   const auth=useAuth()
   return auth? <Outlet/> :<Navigate to="/"/>

}
export default ProtectedRoutes;