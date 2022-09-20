import { Student } from "../../domain/student.js";
// import {sequelize} from "../conection.js";

class StudentRepository{
    
    async create(student){
        try{
            const result = await Student.create({name:student.name});
            await result.reload()
            return result
        }catch(error){
            console.log(error)
        }

    }

    async update(student){
        console.log(student.id)

        if (student.id === undefined){
            throw new Error("Student id is required");
        }
        try{
            const result = await Student.update({name:student.name}, {
                where: {
                    id: student.id
                }
            });
            return result
        }catch(error){
            console.log(error)
        }
    }

    async read(id){
        try{
            const stundent = await Student.findAll({
                where: {
                    id: id
                }
            });
            return stundent;
        }catch(error){
            console.log(error)
        }
    }


    async readAll(){
        try{
            const students = await Student.findAll();
            return students;
        }catch(error){
            console.log(error)
        }
    }

    async delete(id){
        try{
            await Student.destroy({
                where: {
                    id: id
                }
            });
        }catch(error){
            console.log(error)
        }
    }
}

export {StudentRepository};