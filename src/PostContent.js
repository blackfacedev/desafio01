import React from 'react';
import './style.scss';

const postContent = ({ data }) => (
  <div className="Content-Container">
    <p>
      {data.description}
    </p>
  </div>
);

export default postContent;
