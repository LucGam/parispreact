import React from "react";
import PropTypes from "prop-types";

const UserDetails = ({ user, repos, onReset }) => {
  const handleReset = () => {
    onReset();
  };

  if (!user) {
    return null;
  }

  return (
    <div className="text-center">
      <img
        src={user.avatar_url}
        alt="Profilna slika"
        width="120px"
        height="120px"
      />
      <h2>Detalji korisnika</h2>
      <p>
        <strong>Ime:</strong> {user.name || "Nepoznato"}
      </p>
      <p>
        <strong>Lokacija:</strong> {user.location || "Nepoznato"}
      </p>
      <p>
        <strong>Biografija:</strong> {user.bio || "Nema dostupne biografije."}
      </p>
      <h3>Repozitoriji</h3>
      <table className="table">
        <tbody>
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-secondary" onClick={handleReset}>
        Reset
      </button>{" "}
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
  }),
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
