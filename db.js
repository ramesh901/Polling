var data = {
  'polls': {
    '1': {
      'id': 1,
      'title': 'who is your favorite cricket player?',
      'options': ['Dhoni', 'Kohli']
    },
    '2': {
      'id': 2,
      'title': 'who is your favourite national leader?',
      'options': ['Gandhi', 'Nehru', 'Patel']
    }
  }
}
/*
function getPollByID(pollID) {
    var findObject = data['polls'].filter(function (item) {
        return (String(item.id) === pollID)
    })
    if (findObject.length === 0) {
        return null
    }
    else {
        return findObject[0]
    }

}
*/
function getPollByID (pollID) {
  if (!(String(pollID) in data['polls'])) {
    return null
  } else {
    return data.polls[String(pollID)]
  }
}

function getPolls () {
  return data
}

module.exports.getPollByID = getPollByID
module.exports.getPolls = getPolls
