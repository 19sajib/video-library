import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import VideoDetail from '../components/VideoDetail'

import { getVideo, allInteraction } from '../actions/VideoAction'
import ExtraInfo from '../components/ExtraInfo'

const Video = () => {
    
  
  const { id } = useParams()
  const dispatch = useDispatch()
  const  user  = useSelector((state)=> state.authReducer.authData)
  const data = useSelector((state)=> state.videoReducer.video)
  const interaction = useSelector((state)=> state.videoReducer.interaction)

  useEffect(() => {
    dispatch(getVideo(id))
    dispatch(allInteraction(id))
  }, [])
  
  if(!data) return "Retreiving Video..."

  return (
    <Box minHeight="95vh" marginTop="10px" align="center">
        <VideoDetail data={data} user={user} />
        <ExtraInfo data={data} reaction={interaction} user={user} />
    </Box>
  )
}

export default Video