const mongoose = require('mongoose');
const coordinatorSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    club: {type: String, required: true},
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Event'}
})

module.exports = mongoose.model('Coordinator', coordinatorSchema);