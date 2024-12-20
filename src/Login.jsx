import React, { useState } from "react";
import styles from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("Email is", email);
    console.log("Email is", password);
  };
  return (
    <>
      {" "}
      <div className={styles.All}>
        <center>
          <form
            onSubmit={(e) => {
              submit(e);
            }}
            className={styles.conatiner}
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={styles.input}
              type="email"
              placeholder="Enter your Email"
              required
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={styles.input}
              type="password"
              placeholder="Enter your Password"
              required
            />
            <div>
              <button className={styles.btn}>Login</button>
            </div>
          </form>
        </center>
      </div>
    </>
  );
};
export default Login;
