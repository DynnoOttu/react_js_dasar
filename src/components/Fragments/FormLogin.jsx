import Button from "../Elements/Button/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value)
        localStorage.setItem('password', event.target.password.value)
        window.location.href = "/products"
    }

    return(
        <form onSubmit={handleLogin}>
            <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"/>
            <InputForm label="Password" type="password" placeholder="password" name="password"/>
            <Button classname="bg-blue-600 w-full text-white" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin