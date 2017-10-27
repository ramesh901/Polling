function httpGet(url, callback) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            callback(xmlHttp.responseText)
        }
    }
    xmlHttp.open('GET', url, true)
    xmlHttp.send(null)
}

function loadSurvey() {
    httpGet('http://localhost:3040/polls', function (s) {
        var tasks = JSON.parse(s)
        console.log(tasks)
        var polls = tasks['polls']
        var tasksHTML = ''
        for (var key in polls) {
            console.log(polls[key])
            tasksHTML += '<a href=' + 'survey/' + polls[key]['id'] + '>' + polls[key]['title'] + '</a> <br>'
        }
        document.getElementById('adminSummary').innerHTML = tasksHTML
    })
}
window.onload = loadSurvey