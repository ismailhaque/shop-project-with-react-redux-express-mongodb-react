import mongoose from 'mongoose';

// mongodb conection

const mongoDBconnect = async () => {

    try {

        const connection = await mongoose.connect(process.env.STRING);
        console.log('MongoDB connection successfully'.bgGreen.black);
        
    } catch (error) {
        console.log(`${error}`.bgRed.black);
    }

}

export default mongoDBconnect;