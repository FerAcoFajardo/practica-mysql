import {Student} from "./src/domain/student.js";
import {StudentRepository} from "./src/data/repositories/student.repository.js";

// const student = Student.build({name: "Fernando"});

const studentRepository = new StudentRepository()

// studentRepository.create(student);
// console.log(await studentRepository.readAll());

// let result = await studentRepository.read(3)
// console.log(result)

// const student2 = Student.build({id: 1, name: "Fernando"});

// studentRepository.update(student2);

studentRepository.delete(3);

// async function init(){
//     const result = await studentRepository.readAll();
//     console.table(result);
// }

// init();