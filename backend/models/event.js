const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {type: String, required: true},
    club: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    description: {type: String, required: true},
    teamSize: {type:Number,required: false},
    file: {type:Buffer,required: false}
})

module.exports = mongoose.model('Event', eventSchema);