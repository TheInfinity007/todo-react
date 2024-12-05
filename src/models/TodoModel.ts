class TodoModel {
    rowNumber: number;
    rowDescription: string;
    rowAssigned: string

    constructor(rowNumber: number, rowDescription: string, rowAssigned: string) {
        this.rowAssigned = rowAssigned;
        this.rowDescription = rowDescription;
        this.rowNumber = rowNumber
    }
}