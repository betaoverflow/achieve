const mongoose = require('mongoose')

var job = mongoose.model('job', {
    title: { type: String },
    company: { type: String },
    link: { type: String },
    category: { type: String },
    logo: { type: String },
    author:{type:String},
    isApproved: {type: Boolean, default: false}
})

module.exports = { job }