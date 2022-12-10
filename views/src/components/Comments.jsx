import React from 'react'

const Comments = ({comments}) => {
    if (!comments) return <h2>no Comments</h2>
  return (
    <div>{comments.map((comment)=><p>{comment.comment}</p>)}</div>
  )
}

export default Comments