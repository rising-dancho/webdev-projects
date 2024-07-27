import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <strong>{repo.name}:</strong>
      </h3>

      <a href={repo.html_url} target="_blank">
        {repo.html_url}
      </a>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
