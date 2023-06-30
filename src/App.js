import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchUserDetails = async (username) => {
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );
    const userJson = await userResponse.json();
    setUser(userJson);

    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const reposJson = await reposResponse.json();
    setRepos(reposJson);
  };

  const handleReset = () => {
    setUsername("");
    setUser(null);
    setRepos([]);
  };

  return (
    <div className="container">
      <div className="app">
        <h2>GitHub username:</h2>
        {user ? (
          <UserDetails user={user} repos={repos} onReset={handleReset} />
        ) : (
          <UserForm
            onUserSubmit={fetchUserDetails}
            username={username}
            setUsername={setUsername}
          />
        )}
      </div>
    </div>
  );
};

export default App;
