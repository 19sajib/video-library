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

export const addView = (id) => async (dispatch) => {
    dispatch({type: "VIDEO_START"})
    try {
        const { data } = await VideoAPI.addView(id)
        dispatch({type: "VIDEO_VIEW", data: data})
    } catch (error) {
        dispatch({type: "VIDEO_FAIL"})
    }
}
