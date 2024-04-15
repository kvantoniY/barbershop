import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { adminLogin, adminRegistration } from "../store/adminSlice";
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate()
  const dispatch = useDispatch();
  const { auth} = useSelector(
    (state) => state.admin
  );
  const handleLogin = () => {
    if (login.trim().length) {
      dispatch(adminLogin([login, password]));
      setLogin("");
      setPassword("");
    }
  };
  const handleRegistration = () => {
    if (login.trim().length) {
      dispatch(adminRegistration([login, password]));
      setLogin("");
      setPassword("");
    }
  };
  const logout = () => {
    localStorage.setItem("auth", false);
    history('/')
  };
  if (auth === true) {
    history('/')
  }
  return (
    
    <div>
      {localStorage.getItem("auth") === 'false' ? (
        <div>
          <h2>Авторизация в админ панель</h2>
          <input
            placeholder="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>LOGIN</button>
        </div>
      ) : (
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Admin;
