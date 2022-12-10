const CommentModel = require('../Models/Comment')



const addComment = async (req, res) => {
    try {
        if(!req.body.videoId || !req.body.writer || !req.body.writerName || !req.body.comment) return res.status(403).json({message: 'Please fill all the credentials'})

        const comment = new CommentModel(req.body)
        await comment.save()

        res.status(201).json({comment,message: 'Comment posted sucessfully!'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getComment = async (req, res) => {
    const videoId = req.params.id;
    try {
        if(!videoId) return res.status(403).json({message: 'Invalid Credentials'})

        const comments = await CommentModel.find({"videoId": videoId})
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

module.exports = { addComment, getComment }