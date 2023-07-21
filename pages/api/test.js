import sequelize from '../libs/database.js'

export default async function test(req, res){
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
    return res.json({msg: 'Test'})
}