var mongoose=require('mongoose');

var Schema = mongoose.Schema;


var schema= new Schema({
     "Student_Id":{type:String},
    "Amount": {type:String},
    "Payment_Mode": {type:String},
    "date":{type:String}

})

module.exports=mongoose.model('transaction',schema);
