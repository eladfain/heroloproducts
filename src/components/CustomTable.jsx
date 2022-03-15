import classes from '../css/CustomTable.module.css';
const CustomTable=(props)=>{
    const {fields,data}=props;
    const tHead=<tr key='head'>{fields.map(field=><th key={field}>{field}</th>)}</tr>
    const tBody=data.map(row=><tr key={row.id}>{fields.map((field)=><td key={field+row.id}>{row[field]}</td>)}</tr>)
    return(
        <table className={classes.customtable}>
            <thead>
              {tHead}
            </thead>
            <tbody>
               {tBody}
            </tbody>
               
        </table>
    )
}

export default CustomTable;