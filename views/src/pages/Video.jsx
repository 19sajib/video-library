import { Box } from '@mui/material'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

import VideoDetail from '../components/VideoDetail'

const Video = () => {
    
    const { id } = useParams()
    const data = useSelector((state)=> state.videoReducer.videos.video.filter((video)=> video._id ===id)[0])

  return (
    <Box minHeight="95vh" marginTop="10px" align="center">
        <VideoDetail data={data} />
    </Box>
  )
}

export default Video