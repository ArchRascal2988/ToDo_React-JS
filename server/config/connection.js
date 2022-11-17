const mongoose= require('mongoose');
const uri= process.env.PORT || 'mongodb://localhost:27017';


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
