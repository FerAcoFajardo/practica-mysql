import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../data/connection.js";
export class Student extends Model{}


Student.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        max: 100
    }
}, {
    sequelize,
    timestamps: false,
    tableName: "students",
    modelName: "Student",
})

// constructor(id, name){
//     this._id = id;
//     this._name = name;
// }

// get id(){
//     return this._id;
// }

// get name(){
//     return this._name;
// }

// set name(name){
//     this._name = name;
// }



// inscribir(groupCode){
//     if(groupCode === undefined
//         || typeof groupCode !== "string"){
//         throw Error("Código grupo invalido");
//     }
//     console.log("Alumno inscrito a " + groupCode);
// }