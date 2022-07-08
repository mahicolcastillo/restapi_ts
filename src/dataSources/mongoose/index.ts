import {connect} from 'mongoose';

const mongoConnect = async() => {
    try {
        await connect(process.env.MONGOBD || 'mongodb://localhost:27017/tucomanda');

        console.log('Database connected');
    } catch (error) {
        console.log(error);
        throw new Error('Error in connection database');
    }
};

export default mongoConnect;