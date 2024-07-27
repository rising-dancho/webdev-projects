import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../layouts/Spinner';

const User = ({ getUser, user, loading }) => {
  const { login: logIn } = useParams();

  useEffect(() => {
    if (loading) {
      return <Spinner />;
    } else {
      getUser(logIn);
    }
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

  return (
    <div>
      <h1>{login}</h1>
      <ul>
        <li>
          <strong>name:</strong> {name}
        </li>
        <li>
          <strong>avatar url:</strong> {avatar_url}
        </li>
        <li>
          <strong>location:</strong> {location}
        </li>
        <li>
          <strong>bio: </strong> {bio}
        </li>
        <li>
          <strong>blog: </strong> {blog}
        </li>
        <li>
          <strong>html url: </strong> {html_url}
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

export default User;
