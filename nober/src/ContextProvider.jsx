import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import axiosClient from "./AxiosClient";

const AuthContext = createContext({
    user: null
})


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [err, setErr] = useState('')
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))


    const login = async (payload) => {

        try {
            const res = await axiosClient.post('/auth/token/login/', payload)
            console.log(res.data)
            setToken(res.data.auth_token)
            localStorage.setItem('ACCESS_TOKEN', res.data.auth_token)

        }
        catch (e) {
            if (e.response) {
                setErr('Invalid credentials')
                console.log('invalid', e.response.data.non_field_errors[0])

            }
            else if (e.request) {
                console.log('no res', e.message)

            }
            else {
                console.log('error request',)

            }
        }




    };
    const logout = () => {
        localStorage.removeItem('ACCESS_TOKEN')
        setToken(null);
        setUser({});
    }
    return (
        <AuthContext.Provider value={{ token, err, user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
