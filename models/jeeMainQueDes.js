const mongoose = require('mongoose');

const JeeMainDesc = new mongoose.Schema({
    question:{
        type:String,
        required:[true,'Question is Required'],
    },
    options:{
        type:String,
        required:[true,'Option is requred']
    },
    answer:{
        type:String,
    },
    content:{
        type:mongoose.Types.ObjectId,
        ref:"JeeMain",
        required:[true,'Content are requred'],
    },
});
const jeeMainDes = mongoose.model("JeeMainDes",JeeMainDesc);
module.exports = jeeMainDes;