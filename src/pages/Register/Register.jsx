import AddImg from "../../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (err) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid),{
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            });

            await setDoc(doc(db, "userCharts", res.user.uid), {})
            navigate("/")
          });
        }
      );
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="RegisterForm__container">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu E-mail" />
          <input type="password" placeholder="Digite sua senha..." autoComplete="on" />
          <input style={{ display: "none" }} accept="image/*" type="file" id="file" />
          <label htmlFor="file">
            <img src={AddImg} alt="Adicionar Avatar" />
            <span>Adicionar avatar</span>
          </label>
          <button disabled={loading}>Cadastre-se</button>
          {err && <span>Ops! deu erro!</span>}
        </form>
        <p>Já tem uma conta? <Link to="/login">Faça seu login!</Link></p>
      </div>

      <div className="LogoWrapper">
        <span className="logoContainer">pingoChat🐧</span>
      </div>
    </div>
  );
}

export default Register;
