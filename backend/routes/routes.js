const express = require('express')
var router = express.Router()

router.get('/', (req, res, next) =>
{
    res.json({ project: "achieve" });
})

module.exports = router