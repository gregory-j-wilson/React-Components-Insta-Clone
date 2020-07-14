import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {
        comments.map( (comment, index) => {
           return <Comment comment={comment} key={index} />
        })
      }
    </div>
  );
};

export default Comments;
