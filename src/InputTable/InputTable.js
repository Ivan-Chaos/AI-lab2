import { useState } from 'react';
import DataGrid, { TextEditor } from 'react-data-grid';
import classes from './InputTable.module.scss'

const InputTable = ({columns, rows, setRows}) => {

    return (<div className={classes.InputTable}>
        <h2>Оцінка якості життя</h2>
        <div className={classes.tableDiv}>
            <DataGrid className={classes.grid} columns={columns.map(column=>{return{...column, editor: TextEditor}})} rows={rows} onRowsChange={setRows}/>
        </div>
    </div>);
}
 
export default InputTable;