const videoReducer = (
    state = { videos: [], loading: false, error: false,},
    action
) => {
    switch(action.type) {
        case "video_START" :
            return { ...state, loading: true, error:false}
        case "VIDEO_SUCCESS":
            return { ...state, videos: action.data, loading: false, error:false}
        case "VIDEO_VIEW":
        case "VIDEO_LIKE":
        case "VIDEO_DISLIKE":
            return { ...state, videos: state.videos.map((video)=> video._id === action.payload._id ? action.payload : video), loading: false, error:false}
        case "VIDEO_FAIL":
            return { ...state, loading: false, error: true}
        default:
            return state
    }
}

export default videoReducer