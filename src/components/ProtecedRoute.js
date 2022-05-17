import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const ProtecedRoute = ({children}) => {
    const { user }  = UserAuth();

    if(!user) return <Navigate to='/' />
    else return  children
}

export default ProtecedRoute