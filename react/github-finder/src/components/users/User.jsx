import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';

const User = ({ getUser, user, loading }) => {
  const { login: logIn } = useParams();

  useEffect(() => {
    getUser(logIn);
  }, [logIn, getUser]);

  const {
    name,
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
      <h1>{login}</h1>
      <img
        src={avatar_url}
        alt="avatar"
        style={{ width: '250px', height: '250px', borderRadius: '8px' }}
      />

      <ul>
        <li>
          <strong>name:</strong> {name}
        </li>

        <li>
          <strong>location:</strong> {location}
        </li>
        <li>
          <strong>bio: </strong> {bio}
        </li>
        <li>
          <strong>blog: </strong>{' '}
          <a href={blog} target="_blank" rel="noopener noreferrer">
            {blog}
          </a>
        </li>
        <li>
          <strong>html url: </strong>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {html_url}
          </a>
        </li>
        <li>
          <strong>followers: </strong> {followers}
        </li>
        <li>
          <strong>following:</strong> {following}
        </li>
        <li>
          <strong>public repos:</strong> {public_repos}
        </li>
        <li>
          <strong> public gists</strong> {public_gists}
        </li>
        <li>
          <strong> hireable:</strong> {hireable}
        </li>
      </ul>
    </div>
  );
};

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default User;
