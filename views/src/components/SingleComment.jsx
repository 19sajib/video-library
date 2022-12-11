import React from 'react'
import * as timeago from 'timeago.js';
import ReplyComment from './ReplyComment'
import { Typography } from '@mui/material'

const SignleComment = ({comment, comments}) => {
  const responseComment = comments.filter((comm)=> comm.responseTo === comment._id)
  console.log(responseComment)
  return (
    <div>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <Typography variant='h5'>{comment.writerName}</Typography>
        <Typography variant='body1' sx={{marginLeft: '5px'}}>{timeago.format(comment.createdAt)}</Typography>
        </div>
        <Typography variant='h5' style={{display: 'flex'}}>{comment.comment}</Typography>
       {responseComment?.length ? <ReplyComment responseComment={responseComment} comments={comments} /> : null}
    </div>
  )
}

export default SignleComment