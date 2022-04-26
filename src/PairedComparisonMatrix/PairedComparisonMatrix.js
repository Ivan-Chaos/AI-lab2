import classes from './PairedComparisonMatrix.module.scss';
import DataGrid, { TextEditor } from 'react-data-grid';
import { useEffect, useState } from 'react';

const PairedComparisonMatrix = ({ columns, data, setMX }) => {

    const [rows, setRows] = useState([]);

    const objectMap = (obj, fn) =>
        Object.fromEntries(
            Object.entries(obj).map(
                ([k, v], i) => [k, fn(v, k, i)]
            )
        )

    const formattedColumns = [
        {
            key: 'fixedCol',
            frozen: true,
            formatter(props) {
                return <div style={{ backgroundColor: "#f5f5f5", width: 'calc(100% + 16px)', fontWeight: '700' }}>{props.row.fixedCol}</div>
            }
        },
        ...columns
    ]

    useEffect(() => {

        const pureData = data[0];
        const insertedMatrix = columns.map(col => {


            let a = objectMap(pureData, (value) => {
                return parseFloat((value / pureData[col.key]).toFixed(4));
            });


            return { fixedCol: col.name, ...a };
        })

        const r1 = {
            ...objectMap(pureData, (value, index) =>
                insertedMatrix.reduce((a, b) => {
                    return a[index] ?? a + b[index]
                }, 0)
            )
        }

        const r2 = {
            ...objectMap(pureData, (value, index) =>
                1/insertedMatrix.reduce((a, b) => {
                    return a[index] ?? a + b[index]
                }, 0)
            )
        }

        const mx = {
            ...objectMap(r2, (value, index) => value/Math.max(...Object.values(r2)))
        }

        setMX({...mx});

        setRows([...insertedMatrix, {fixedCol: '1', ...r1}, {fixedCol: '2', ...r2}, {fixedCol: 'M(X)', ...mx}])
    }, [data])

    return (<div className={classes.PairedComparisonMatrix}>
        <DataGrid columns={formattedColumns} rows={rows} onRowsChange={setRows} />
    </div>);
}

export default PairedComparisonMatrix;