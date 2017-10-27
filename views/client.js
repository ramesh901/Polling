function httpGet (url, callback) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      callback(xmlHttp.responseText)
    }
  }
  xmlHttp.open('GET', url, true)
  xmlHttp.send(null)
}

function loadSurvey () {
  httpGet('http://localhost:3040/polls', function (s) {
    var tasks = JSON.parse(s)
    console.log(tasks)
        // console.log('task length', tasks.length)
        // console.log(tasks[1]['title'])
    let tasksHTML = ''
    for (let i = 0; i < tasks.length; ++i) {
      tasksHTML += '<a href=' + tasks[i]['id'] + '>' + tasks[i]['title'] + '</a> <br>'
    }
    document.getElementById('adminSummary').innerHTML = tasksHTML
  })
}

function start (response) {
  console.log("Request handler 'start' was called.")

  var body = '<html>' +
        '<head>' +
        '<meta charset=UTF-8" />' +
        '<link rel="shortcut icon" href="#" />' +
        '<title>Survey</title>' +
        '</head>' +
        '<body>' +
        '<div> <h5>Links for all polls</h5>' +
        '<div id="adminSummary"> </div> </div>' +
        '</body>' +
        '</html>'

  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write(body)
  response.end()
}
window.onload = loadSurvey

// exports.start = start
// exports.loadSurvey = loadSurvey
