
var pubs = require('../mocks/pubs.json')
var moment = require('moment')

function getAllPubs(){
    return pubs;
}

function getAllPubsByOpenDays() {
    var pubsToReturn = []
    pubs.forEach(pub => {
        if(pub.openDays.includes(moment().format('dddd'))){
            pubsToReturn.push(pub)
        }
    });
    return pubsToReturn
}

module.exports = {
    getAllPubs: getAllPubs,
    getAllPubsByOpenDays: getAllPubsByOpenDays
}