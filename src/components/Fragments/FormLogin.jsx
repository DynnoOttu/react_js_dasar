import { useEffect, useRef, useState } from "react";
import { login } from "../../Services/auth.service";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Index"

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("")

    const handleLogin = (event) => {
        event.preventDefault();
        // localStorage.setItem('email', event.target.email.value)
        // localStorage.setItem('password', event.target.password.value)
        // window.location.href = "/products"
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        login(data, (status, res) => {
            if(status){
                localStorage.setItem("token", res)
                window.location.href = "/products"
            }else{
                setLoginFailed(res.response.data)
                console.log("error :", res.response.data)
            }
        });
    }

    const usernameRef = useRef(null)

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    return(
        <form onSubmit={handleLogin}>
            <InputForm label="Username" type="text" placeholder="Username" name="username" ref={usernameRef}/>
            <InputForm label="Password" type="password" placeholder="password" name="password"/>
            <Button classname="bg-blue-600 w-full text-white" type="submit">Login</Button>
            {loginFailed && <p className="text-red-500 text-center mt-4">{loginFailed}</p>}
        </form>
    )
}

export default FormLogin