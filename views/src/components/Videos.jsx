import { Stack, Box } from '@mui/material'

import VideoCard from './VideoCard'

const Videos = ({videos}) => {

  if(!videos?.video?.length) return "Retreiving Videos..."

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={3}>
       {videos.video.map((video, id) => (
          <Box key={id}> 
            <VideoCard video={video} />
          </Box>
        ))}
    </Stack>
  )
}

export default Videos