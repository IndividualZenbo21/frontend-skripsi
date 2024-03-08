import InputForm from "../Elements/Input/Index"
import Button from "../Elements/Button"

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem('email', event.target.Email.value)
    localStorage.setItem('password', event.target.password.value)
    window.location.href = "/products"
  }
    return (
        <form onSubmit={handleLogin}>
          <InputForm label="Email" type="email" placeholder="example@mail.com" name="Email"/>
          <InputForm label="Password" type="password" placeholder="*****" name="password"/>
          <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin