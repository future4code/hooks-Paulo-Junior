import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //exercicio incompleto

  const postLogin = () => {
    const body = {
        email : email,
        password : password
    }

    axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/paulo-junior-hooks/login", body)

            .then((response) => {
                localStorage.setItem("token", response.data.token)
                navigate("/admin/trips/list")
            }
        )

            .catch((error) => {
                alert("Ops! Algo deu errado!!")
            }
        )
    }

    const onChangeEmail = (event) => {
      setEmail(event.target.value)
  }

   const onChangePassword = (event) => {
      setPassword(event.target.value)
  }


  return (
    <>
      <header>Login Page</header>
      <hr />
      <input placeholder="Digite seu Email" value={email} onChange={onChangeEmail} type="email"/>
      <input placeholder="Digite sua senha" value={password} onChange={onChangePassword} type="password"/>
      <button onClick={() => postLogin()}>Entrar</button>
      <button onClick={() => navigate(-1)}>Voltar</button>   
      <hr />
      <footer>Rodapé da página</footer>
    </>
  );
}

export default LoginPage;
