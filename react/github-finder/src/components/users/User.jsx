import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';

const User = ({ getUser, getUserRepos, user, repos, loading }) => {
  const { login: logIn } = useParams();

  useEffect(() => {
    getUser(logIn);
    getUserRepos(logIn);
    // eslint-disable-nextline
  }, []);

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

  // const [name] = repos;

  if (loading) return <Spinner />;

  return (
    <div>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>{' '}
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
          {location && <p>{location}</p>}
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
                <p>
                  <strong>Username: </strong> {login}
                </p>
              )}
            </li>
            <li>
              {company && (
                <p>
                  <strong>Company: </strong> {company}
                </p>
              )}
            </li>
            <li>
              {blog && (
                <p>
                  <strong>Website: </strong>{' '}
                  <a href={blog} target="_blank">
                    {blog}
                  </a>
                </p>
              )}
            </li>
          </ul>
          <a href={html_url} className="btn btn-dark my-1" target="_blank">
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
      {/* testing if repos  */}
      {/* {repos.map((repo) => (
        <h3>{repo.name}</h3>
      ))} */}
      {/* <h2>Repositories:</h2> */}
      <Repos repos={repos} />
    </div>
  );
};

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default User;
