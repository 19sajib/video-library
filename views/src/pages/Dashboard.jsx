import React from 'react'
import { Stack, Box, Typography, Divider } from '@mui/material'
import { useSelector } from 'react-redux'

import Videos from '../components/Videos'
import UploadVideo from '../components/UploadVideo'

const Dashboard = () => {

    const  user  = useSelector((state)=> state.authReducer.authData)
    let { videos } = useSelector((state) => state.videoReducer);
    videos = videos.video.filter((video) => video.userId === user._id)

  return (
    <Stack>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
        <UploadVideo user={user} />
        <Divider variant="middle">
        <Typography variant="h4" align="center">My Uploads</Typography>
        </Divider>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Dashboard