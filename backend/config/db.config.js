const mongoose = require("mongoose") ; 


const DBConnection = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log(`The DB is connected with ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
      mongoose.disconnect();
      process.exit(1);
    }
  };
  
  module.exports = DBConnection;
  