import { TableRow } from "../../components"
import './Table.css'

const Table = (data) => {
  return (
    <table className="table">
      <thead className="table__head">
        <th className="table__title">Información</th>
        <th className="table__title table__title--right">GBA Estatus</th>
      </thead> 
      <tbody>
        {data.data.map((item, index) => (
          <TableRow
            key={index}
            data={item}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Table
