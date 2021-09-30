const {Sequalize } = require("sequelize");

const sequelize = new Sequelize(
    "postgres",
    "postgres",
    "123456789",
    {
        host: "localhost",
        dialect: "postgres"
    }
);

sequelize.sync();

(async()=>{
    try{
        await sequelize.authenticate();
        console.log("connection established with DB");
    }
    catch(err){
        console.error("unable to connect DB");
    }
})();

module.exports =sequelize;