import * as VideoAPI from '../api/VideoRequest'

export const getAllVideo = () => async (dispatch) => {
    dispatch({type: "VIDEO_START"})
    try {
        const { data } = await VideoAPI.getAllVideo()
        dispatch({type: "VIDEO_SUCCESS", data: data})
    } catch (error) {
        dispatch({type: "VIDEO_FAIL"})
    }
}
