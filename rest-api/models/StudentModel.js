const dataBase = require('../dataBase/dbConnect');

module.exports = class StudentModel{
    static getAll(callback){
        return dataBase.query("SELECT * FROM student", callback);
    }

    static getById(id, callback){
        return dataBase.query("SELECT * FROM student WHERE studentID = ?", 
        [id], callback);
        
    }

    static getByName(name, callback){
        return dataBase.query("SELECT * FROM student WHERE name = ?", 
        [name], callback);

    }

    static getByCpf(cpf, callback){
        return dataBase.query("SELECT * FROM student WHERE cpf = ?", 
        [cpf], callback);

    }
    
    static create(data, callback){
        return dataBase.query("INSERT INTO student (studentID, name, email, cpf) VALUES(?, ?, ?, ?)",
        [data.studentID, data.name, data.email, data.cpf] , callback);

    }

    static update(data, callback){
        
        if (data.name != null && data.email != null){
            return dataBase.query("UPDATE student SET name = ?, email = ? WHERE studentID = ?",
            [data.name, data.email, data.studentID] , callback);
        }else{
            if (data.name != null){
                return dataBase.query("UPDATE student SET name = ? WHERE studentID = ?",
                [data.name, data.studentID] , callback);
            }
            if (data.email != null){
                return dataBase.query("UPDATE student SET email = ? WHERE studentID = ?",
                [data.email, data.studentID] , callback);
            }
        }
    }

    static delete(id, callback){
        return dataBase.query("DELETE FROM student WHERE studentID = ?", 
        [id], callback);
    }
}