const mongoose= require('mongoose');
const uri= process.env.PORT || 'mongodb://localhost:27017/ToDoDB';


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports= mongoose.connection;
