import {Student} from "./src/domain/student.js";
import {StudentRepository} from "./src/data/repositories/student.repository.js";

const student = Student.build({name: "Fernando"});

const studentRepository = new StudentRepository()

studentRepository.create(student);
// studentRepository.readAll().then((result) => {
//     console.table(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// studentRepository.read(1).then((result) => {
//     console.table(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// const student2 = new Student("1", "Pedro Perez");

// studentRepository.update(student2);

// studentRepository.delete(3);

// async function init(){
//     const result = await studentRepository.readAll();
//     console.table(result);
// }

// init();