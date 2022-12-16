import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [psw, setPsw] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const isLoggedUser = useSelector((state) => state.loggedInUser);

  const login = () => {
    const payload = users.find(
      (user) => user.username === username && user.psw === psw
    );
    if (payload) {
      dispatch({
        type: "LOGIN",
        payload,
      });
    } else {
      alert("no credentials");
    }
  };

  return (
    !isLoggedUser && (
      <>
        <div class="form">
          <div class="title">Welcome</div>
          <div class="subtitle">Let's Login your account!</div>
          <div class="input-container ic1">
            <input
              class="input"
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div class="cut"></div>
            <label for="username" class="placeholder">
              Username
            </label>
          </div>
          <div class="input-container ic2">
            <input
              id="password"
              type="password"
              placeholder="password"
              class="input"
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
            />
            <div class="cut"></div>
            <label for="password" class="placeholder">
              Password
            </label>
          </div>
          <button type="text" class="submit" onClick={login}>
            submit
          </button>
        </div>
      </>
    )
  );
};
export default Login;
