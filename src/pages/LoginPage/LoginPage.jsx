import "./LoginPage.css";
import { useState } from "react";

export default function LoginPage(props) {
  const { setUser } = props;
  const [newUser, setNewUser] = useState("");

  function handleChange(evt) {
    setNewUser(evt.target.value);
  }

  function handleClick(evt) {
    evt.preventDefault();
    setUser(newUser);
  }

  return (
    <>
      <h2>What is your username</h2>
      <form onSubmit={handleClick}>
        <input
          value={newUser}
          onChange={handleChange}
          placeholder="New User"
          required
        />
        <button type="submit">Create User</button>
      </form>
    </>
  );
}
