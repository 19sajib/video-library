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

export const addLike = (id) => async (dispatch) => {
    dispatch({type: "VIDEO_START"})
    try {
        const { data } = await VideoAPI.addLike(id)
        dispatch({type: "VIDEO_LIKE", data: data})
    } catch (error) {
        dispatch({type: "VIDEO_FAIL"})
    }
}
export const addDislike = (id) => async (dispatch) => {
    dispatch({type: "VIDEO_START"})
    try {
        const { data } = await VideoAPI.addDislike(id)
        console.log(data);
        dispatch({type: "VIDEO_DISLIKE", data: data})
    } catch (error) {
        dispatch({type: "VIDEO_FAIL"})
    }
}
