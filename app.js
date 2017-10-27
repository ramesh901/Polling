var express = require('express')
var fs = require('fs')
var db = require('./db.js')

var app = express()

app.get('/polls', function (req, res) {
  res.json(db.getPolls())
})

app.get('/poll/:id', function (req, res) {
    var pollID = req.params.id
    var poll = db.getPollByID(pollID)
    if (poll !== null) {
        return res.json({ resp: poll })
    }
    return res.json({ error: 'No such poll' })  
})

app.get('/survey', function (req,res) {
    let pathname = './views/adminSummary.html'
    fs.readFile(pathname, 'utf8', function (err, data) {
        if (err) throw err
        else {
            //const ext = path.parse(pathname).ext
            //console.log('ext is', ext)
            res.setHeader('Content-type', 'text/html')
            res.end(data)
        }
    })
})

app.listen(3040)
console.log('listening to port 3040')
