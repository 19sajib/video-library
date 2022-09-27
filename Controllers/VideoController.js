const VideoModel = require('../Models/Video')

// Adding Video   

const addVideo = async (req, res) => {

    const newVideo = new VideoModel(req.body)
    try {
        const video = await newVideo.save();
        res.status(200).json({video})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Get All video

const allVideo = async (req, res) => {
    try {
        const video = await VideoModel.find()
        res.status(200).json({video})
    } catch (error) {
        rest.status(500).json({message: error.message})
    }
}

module.exports = {addVideo, allVideo}