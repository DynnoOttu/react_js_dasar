import Button from "../Elements/Button/Button"
import InputForm from "../Elements/Input"

const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="FullName" type="text" placeholder="Input your name" name="fullname" />
            <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" />
            <InputForm label="Password" type="password" placeholder="password" name="password" />
            <InputForm label="Confirm Password" type="password" placeholder="Confirm password" name="confirmPassword" />
            <Button classname="bg-blue-600 w-full text-white">Register</Button>
        </form>
    )
}

export default FormRegister