import React from 'react';
import { PropTypes } from 'prop-types';

const AppNewsItem = ({ appnews }) => {
  const {
    gid, title,
  } = appnews;
  return (
    <>
      <div className="container">
        <p>
          {' '}
          {gid}
          {' '}
        </p>
        <p>
          {' '}
          {title}
        </p>
      </div>
    </>
  );
};

AppNewsItem.propTypes = {
  appnews: PropTypes.shape({
    gid: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default AppNewsItem;
