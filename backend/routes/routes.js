const express = require('express')
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId

var { job } = require('../models/job')

router.get('/', (req, res, next) =>
{
    res.json({ project: "achieve" });
})

// get all jobs
router.get('/job', (req, res, next) => {
    job.find((err, response) => {
        if (!err) res.send(response)
        else console.log('Error while retrieving all jobs: ' + JSON.stringify(err, undefined, 2))
    })
})

// post jobs
router.post('/job', (req, res) => {
    var newjob = new job({
        title: req.body.title,
        company: req.body.company,
        link: req.body.link,
        category: req.body.category,
        logo: req.body.logo,
        author: req.body.author
    })
    newjob.save((err, response) => {
        if (!err) res.send(response)
        else console.log('Error while creating new job: ' + JSON.stringify(err, undefined, 2))
    })
})

// update job
router.put('/moderator/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send('No job with given Id: ' + res.params.id)

    var updatejob = {
        title: req.body.title,
        company: req.body.company,
        link: req.body.link,
        category: req.body.category,
        logo: req.body.logo,
        author: req.body.author,
        isApproved: req.body.isApproved
    }

    job.findByIdAndUpdate(req.params.id, { $set: updatejob }, (err, response) => {
        if (!err) res.send(response)
        else console.log('Error while updating a job: ' + JSON.stringify(err, undefined, 2))
    })
})

// delete jobs
router.delete('/moderator/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send('No job with given Id: ' + res.params.id)
    job.findByIdAndRemove(req.params.id, (err, response) => {
        if (!err) res.send(response)
        else console.log('Error while deleting a job: ' + JSON.stringify(err, undefined, 2))
    })
})

module.exports = router

