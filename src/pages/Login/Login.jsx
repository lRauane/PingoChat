import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="RegisterForm__container">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Digite seu E-mail..." />
          <input type="password" placeholder="Digite sua senha..." />
          <button>Login</button>
          {err && <span>Ops! deu erro!</span>}
        </form>
        <p>
          Não tem uma conta? <Link to="/register">Cadastre-se agora!</Link>
        </p>
      </div>
      <div className="LogoWrapper">
        <span className="logoContainer">pingoChat🐧</span>
      </div>
    </div>
  );
}

export default Login;
