const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://dindraganteng:dindraganteng@clusterdindra.mctak.mongodb.net/UAS_PRAK_DPM?retryWrites=true&w=majority&appName=ClusterDindra');
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
