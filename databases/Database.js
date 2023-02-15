class Database {
    constructor() {
        if (this.constructor === Database) {
            throw new Error("Database is an abstract class");
        }
    }

    getInstance() {
        throw new Error("Method 'getInstance()' must be implemented.");
    }

    get(data){
        throw new Error("Method 'getData()' must be implemented.");
    }

    put(data){
        throw new Error("Method 'putData()' must be implemented.");
    }

    update(data){
        throw new Error("Method 'updateData()' must be implemented.");
    }

    delete(data){
        throw new Error("Method 'deleteData()' must be implemented.");
    }


}

export { Database };