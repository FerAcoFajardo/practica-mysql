import {createConnection} from "mysql";

export const getConnection = () => {
    const conection = createConnection({
        host: "localhost",
        user: "root",
        password: "12345",
        port:3306,
        database: "practica_node"
    });
    return conection;
}