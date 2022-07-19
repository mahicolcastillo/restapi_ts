import {connect, ConnectOptions} from 'mongoose';

const mongoConnect = async() => {
    try {
        await connect(`mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGOURL}:${process.env.MONGOPORT}/${process.env.MONGOCOLLECTION}`, {
            authSource: 'admin',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log('Database connected');
    } catch (error) {
        console.log(error);
        throw new Error('Error in connection database');
    }
};

export default mongoConnect;