var mongoose = require('mongoose');

NotificationSchema   = new mongoose.Schema({
    message: String, 
    read:Boolean
},{
    timestamps:true
});

mongoose.model("Notification",NotificationSchema);