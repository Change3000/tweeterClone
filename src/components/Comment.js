import React from 'react';
import './styles.css';

function Comment({ content }) {
  return (
    <div className="comment">
      {content}
    </div>
  );
}

export default Comment;
