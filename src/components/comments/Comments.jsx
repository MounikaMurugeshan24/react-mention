import React from 'react';
import './Comments.css'
import { USER_NAME } from '../../constants/data';

const Comments = ({ commentsList }) => {


  return (
    <div className="comments">
    {
    commentsList.map((comment, index) => 
        <div className="comment-item p-1"> 
            <div key={index}
                className="comment font mb-3">
                {comment}
            </div>
            <div className="user-details flex items-baseline text-xs pt-1">
                <div className="profile-pic flex justify-center items-center mr-1">M</div>
                <div className="user-name">{USER_NAME}</div>
            </div>
      </div> 
   )}
        
    </div>
  );
};

export default React.memo(Comments);