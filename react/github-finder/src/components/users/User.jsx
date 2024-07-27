import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';

const User = ({ getUser, user, loading }) => {
  const { login: logIn } = useParams();

  useEffect(() => {
    getUser(logIn);
  }, [logIn, getUser]);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <div>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt="avatar"
            className="round-img"
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong> {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company: </strong> {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Website: </strong>{' '}
                  <a href={blog} target="_blank">
                    {blog}
                  </a>
                </>
              )}
            </li>
          </ul>
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
      </div>
    </div>
  );
};

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default User;
