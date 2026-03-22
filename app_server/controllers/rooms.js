var fs = require('fs');
var rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const roomsPage = (req, res) => {
    res.render('rooms', { title: 'Rooms', rooms });
};

module.exports = {
    roomsPage
};