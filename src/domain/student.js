export class Student {


    constructor(id, name){
        this._id = id;
        this._name = name;
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
    


    inscribir(groupCode){
        if(groupCode === undefined
            || typeof groupCode !== "string"){
            throw Error("Código grupo invalido");
        }
        console.log("Alumno inscrito a " + groupCode);
    }
}