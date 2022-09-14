import { Student } from "../../domain/student.js";
import {getConnection} from "../conection.js";

class StudentRepository{
    
    constructor(){
        this._connection = getConnection();
    }

    get connection(){
        return this._connection;
    }

    create(student){
        this.connection.connect((err) => {
            if(err){
                console.log("Error connecting to database");
                return;
            }
            const sqlCode = `INSERT INTO students(name) VALUES('${student.name}')`;
            this.connection.query(sqlCode, (error, result) => {
                if(error){
                    console.log("Insert error");
                    return;
                }
                console.log("Student successfully created");
            });
            this.connection.end();
        });
    }

    update(student){
        this.connection.connect((err) => {
            if(err){
                console.log("Error connecting to database");
                return;
            }
            const sqlCode = `UPDATE students SET name = '${student.name}' WHERE id = ${student.id}`;
            this.connection.query(sqlCode, (error, result) => {
                if(error){
                    console.log("Update error");
                    return;
                }
                console.log("Student successfully updated");
            });
            this.connection.end();
        });
    }

    read(id){
        return new Promise((resolve, reject) => {
            this.connection.connect((err) => {
                if(err){
                    console.log(err);
                    reject(err);
                    return;
                }
                const sqlCode = `SELECT id, name from students where id = ${id}`;
                this.connection.query(sqlCode, (error, result) => {
                    if(error){
                        console.log(err);
                        reject(err);
                        return;
                    }
                    const students = result.map((row) => {
                        // return new Student(row.id, row.name);
                        const {id, name} = row;
                        return new Student(id, name);
                    });
                    resolve(students);
                
                });
                this.connection.end();
            });
        });
    }


    readAll(){
        return new Promise((resolve, reject) => {
            this.connection.connect((err) => {
                if(err){
                    console.log(err);
                    reject(err);
                    return;
                }
                const sqlCode = `SELECT id, name from students `;
                this.connection.query(sqlCode, (error, result) => {
                    if(error){
                        console.log(err);
                        reject(err);
                        return;
                    }
                    const students = result.map((row) => {
                        // return new Student(row.id, row.name);
                        const {id, name} = row;
                        return new Student(id, name);
                    });
                    resolve(students);
                
                });
                this.connection.end();
            });
        });
    }

    delete(id){
        this.connection.connect((err) => {
            if(err){
                console.log("Error connecting to database");
                return;
            }
            const sqlCode = `DELETE FROM students WHERE id = ${id}`;
            this.connection.query(sqlCode, (error, result) => {
                if(error){
                    console.log("Delete error");
                    return;
                }
                console.log("Student successfully deleted");
            });
            this.connection.end();
        });
    }
}

export {StudentRepository};