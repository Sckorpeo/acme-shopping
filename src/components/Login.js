import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state/actionCreators/authAC";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (ev) => {
    ev.preventDefault();
    const credentials = { username: username, password: password };
    dispatch(login(credentials));
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
