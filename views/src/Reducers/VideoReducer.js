const videoReducer = (
    state = { videos: [], loading: false, error: false,},
    action
) => {
    switch(action.type) {
        case "video_START" :
            return { ...state, loading: true, error:false}
        case "VIDEO_SUCCESS":
            return { ...state, videos: action.data, loading: false, error:false}
        case "VIDEO_FAIL":
            return { ...state, loading: false, error: true}
        default:
            return state
    }
}

export default videoReducer