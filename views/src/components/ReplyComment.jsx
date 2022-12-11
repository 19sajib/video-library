import React from 'react'
import SingleComment from './SingleComment'

const ReplyComment = ({responseComment, comments}) => {

  return (
    <div style={{display: 'flex', marginLeft: '20px'}}>
        {responseComment?.length && responseComment.map((comment, index)=> (
      <SingleComment key={index} comment={comment} comments={comments} />
      )
      )}
    </div>
  )
}

export default ReplyComment