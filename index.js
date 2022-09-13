import {Student} from "./src/domain/student.js";
import {StudentRepository} from "./src/data/repositories/student.repository.js";

const student = new Student("1", "Juan");

const studentRepository = new StudentRepository()

// studentRepository.create(student);
// studentRepository.readAll().then((result) => {
//     console.table(result);
//     }).catch((err) => {
//         console.log(err);
//     });

studentRepository.read(1).then((result) => {
    console.table(result);
    }).catch((err) => {
        console.log(err);
    });

// const student2 = new Student("1", "Pedro Perez");

// studentRepository.update(student2);