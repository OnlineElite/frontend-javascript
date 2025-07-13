/// <reference path = 'crud.d.ts' />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js'

const row : RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
}

const newRowID : RowID = CRUD.insertRow(row)
const updatedRow : RowElement = {...row, age : 23}

CRUD.updateRow(newRowID, updatedRow)
CRUD.deleteRow(newRowID)

//-------------- Exemple of results -----------------------
const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updateRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updateRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125