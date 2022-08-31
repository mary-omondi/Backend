const mongoose = require("mongoose");
mongoose.set("debug",true);
mongoose.Promise = Promise;
mongoose.connect("mongodb+srv://marrie:design123@cluster0.hmf6un7.mongodb.net/mytwitter?retryWrites=true&w=majority",{keepAlive:true}
);

module.exports.User = require("./User");
