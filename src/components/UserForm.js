import React, { useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ onUserSubmit }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUserSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label"></label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleInputChange}
          placeholder="Korisničko ime"
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        GO!
      </button>
    </form>
  );
};

UserForm.propTypes = {
  onUserSubmit: PropTypes.func.isRequired,
};

export default UserForm;
