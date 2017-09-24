var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema =mongoose.Schema({

userName:{type: String,index:{unique:true}},
repoName:String,
repoUrl:String
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;