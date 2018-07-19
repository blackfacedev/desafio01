import React from 'react';
import './style.scss';

const postHeader = ({ data }) => (
  <div className="HeadContainer">
    <div className="img-container">
      <img src={data.img} alt={data.author} className="img" />
    </div>
    <div className="info-container">
      <span className="author">
        {data.author}
      </span>
      <span className="time-posted">
        {data.date}
      </span>
    </div>
  </div>
);

export default postHeader;
