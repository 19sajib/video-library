import React from 'react'
import moment from 'moment'

const SignleComment = ({data}) => {
  return (
    <div>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <h4>{data.writerName}</h4>
        <h5>{moment(data.createdAt).startOf('hour').fromNow()}</h5>
        </div>
        <h4 style={{display: 'flex'}}>{data.comment}</h4>
    </div>
  )
}

export default SignleComment