import { signOut } from "firebase/auth";
import { AuthContext } from "../context/Auth";
import { auth } from "../firebase";
import { useContext } from "react";

function NavBar() {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="navBar">
      <span className='logoContainer'>pingoChat🐧</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="Avatar do usuário" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Sair</button>
      </div>
    </div>
  )
}

export default NavBar;