const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
        required: true,
    },
    responseTo: {
        type: String
    },
    comment: {
        type: String,
        required: true,
    }
}, { timestamps:true })

const CommentModel = mongoose.model('Comment', CommentSchema)

module.exports = CommentModel;