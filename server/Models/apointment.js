const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const AppointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    date: { type: Date },
    description: {
        type: String,
        possibleValues: ['email', 'phone']
    }

});
AppointmentSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Appointment", AppointmentSchema);