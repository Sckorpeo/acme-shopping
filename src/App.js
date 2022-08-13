import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exchangeToken, logout } from "../state/actionCreators.js/authAC";
import Login from "./Login";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(exchangeToken());
  }, []);

  return (
    <div>
      {auth.id ? <p>welcome</p> : <Login />}
      {auth.id ? (
        <button onClick={() => dispatch(logout())}>Log Out</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
