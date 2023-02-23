abstract class DatabaseSchema {
    private constructor() {
        throw new Error("Database is an abstract class");
    }

    static getInstance() {
        throw new Error("Method 'getInstance()' must be implemented.");
    }

    static get(data){
        throw new Error("Method 'getData()' must be implemented.");
    }

    static put(data){
        throw new Error("Method 'putData()' must be implemented.");
    }

    static update(data){
        throw new Error("Method 'updateData()' must be implemented.");
    }

    static delete(data){
        throw new Error("Method 'deleteData()' must be implemented.");
    }


}

export { DatabaseSchema };