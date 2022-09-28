import moment from 'moment';
import ReactPlayer from "react-player";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux' 
import Avatar from '@mui/material/Avatar';
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';


const VideoDetail = ({data}) => {

    const[ played, setPlayed ] = useState(0)
    const dispatch = useDispatch();
    const  user  = useSelector((state)=> state.authReducer.authData)
    const { title, videoUrl, userId, likes, dislikes, views, createdAt, desc, username } = data;

    const viewCount = (progress) => {
        console.log(progress);
        if(played===0 && progress.playedSeconds > 6) {
            setPlayed((prev)=>prev+1)
        }
        console.log(played);
    }
  return (
    <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer 
                        url={videoUrl} 
                        controls 
                        width="100%" height="67vh"
                        onProgress={(progress) => {
                            viewCount(progress);
                          }}
                        />
            <Typography color="#1E1E1E" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#1E1E1E" }} py={1} px={2} >
              <Link to={`/user/${userId}`} style={{display: 'flex', textDecoration: 'none', alignItems: 'center'}}>
                {/* <Avatar alt={`${user.fullName}`} src={`${user?.image}`} /> */}
                <Typography variant={{ sm: "subtitle1", md: 'h5' }} color="#1E1E1E" >
                  {username}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center" >
                <Typography variant="body1" sx={{ opacity: 0.7, alignItems: "center", mr: '5px' }}>
                  {parseInt(views).toLocaleString()} views  • {moment(createdAt).fromNow()}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7,  alignItems: "center" }}>
                  {likes?.includes(user?._id) ? (
                    <ThumbUpAltIcon sx={{ fontSize: "22px", color: "gray", ml: "5px" }} />
                      ) : (
                    <ThumbUpOffAltIcon sx={{ fontSize: "22px", color: "gray", ml: "5px" }} />
                    )}{" "}
                    {likes?.length}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7,  alignItems: "center" }}>
                {dislikes?.includes(user?._id) ? (
                    <ThumbDownAltIcon sx={{ fontSize: "22px", color: "gray", ml: "5px" }} />
                      ) : (
                  <ThumbDownOffAltIcon sx={{ fontSize: "22px", color: "gray", ml: "5px" }} />
                      )}{" "}
                  {parseInt(dislikes?.length).toLocaleString()}
                </Typography>
              </Stack>
            </Stack>
              <Typography color="gray" variant="h6" fontWeight="bold"  align="left" p={2}>
              {desc}
              </Typography>
          </Box>
        </Box>
      </Stack>
  )
}

export default VideoDetail