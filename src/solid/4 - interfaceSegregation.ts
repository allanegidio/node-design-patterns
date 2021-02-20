/*
    Prevent classes from implement on things that they dont need
    In order to prevent this, we should make sure to really split up the unique functionality into interfaces.
*/

interface IBaseRepository {
    findAll(): any[];
    findById(): any;
    remove(): void;
    add(): void;
    update(): void;
}

/*
    In this case interface segregation is violated.
    ReadOnlyRepository doesn't need to know or implement anything related remove, add or update.
*/

// @ts-ignore -> It's to typescript ignore duplicate names errors.
class ReadOnlyBaseRepository implements IBaseRepository {
    findAll(): any[] {
        throw new Error("Method not implemented.");
    }
    findById() {
        throw new Error("Method not implemented.");
    }
    remove(): void {
        throw new Error("Method not implemented.");
    }
    add(): void {
        throw new Error("Method not implemented.");
    }
    update(): void {
        throw new Error("Method not implemented.");
    }
}

/*
    In this case we need only a IReadOnlyRepository because we just need a consultant operations in DataBase.
*/

interface IReadOnlyBaseRepository {
    findAll(): any[];
    findById(): any;
}

// @ts-ignore -> It's to typescript ignore duplicate names errors.
class ReadOnlyBaseRepository implements IReadOnlyBaseRepository {
    findAll(): any[] {
        throw new Error("Method not implemented.");
    }
    findById() {
        throw new Error("Method not implemented.");
    }
}