import {PersonInfoCell, IsGBACell} from '../'
import './TableRow.css'

const TableRow = ({data}) => {

  return (
    <tr className='table-row'>
      <PersonInfoCell dni={data.dni} name={data.name} surName={data.lastname} dateOfBirth={data.birth_day} />
      <IsGBACell isGBA = {data.is_gba} />
    </tr>
  )
}

export default TableRow