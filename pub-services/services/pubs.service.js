
const pubs = require('../mocks/pubs.json')
const moment = require('moment')
const pubModel = require("../model/Pub.js")

function getAllPubs(){
    const pubsToReturn = []
    pubs.forEach(pub => {
        pubsToReturn.push(new pubModel.Pub(pub.name, pub.owner, pub.openDays, pub.openHours, pub.beers))
    });
    console.log(pubsToReturn);
    return pubsToReturn;
}

function getAllPubsByOpenDays() {
    const pubsToReturn = []
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