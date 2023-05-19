import Button from "../Elements/Button/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
    return(
        <form action="">
            <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"/>
            <InputForm label="Password" type="password" placeholder="password" name="password"/>
            <Button classname="bg-blue-600 w-full text-white">Login</Button>
        </form>
    )
}

export default FormLogin