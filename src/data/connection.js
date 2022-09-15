import {Sequelize, INTEGER, STRING} from "sequelize";


const sequelize = new Sequelize("practica_node", "root", "12345", {
        host: "localhost",
        dialect: "mysql"
    });


// export const Student = sequelize.define("Student",);

export {sequelize};