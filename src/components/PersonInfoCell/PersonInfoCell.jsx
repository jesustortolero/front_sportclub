import './PersonInfoCell.css'

const PersonInfoCell = ({ dni, name, surName, dateOfBirth }) => {
  return (
  <td className="person-cell">
    <div className="person-cell__item">
      <span className="person-cell__label">Name: </span>{name} {surName}
    </div>
    <div className="person-cell__item">
    <span className="person-cell__label">DNI: </span>{dni}
    </div>
    <div className="person-cell__item">
    <span className="person-cell__label">Fecha de nacimiento: </span>{dateOfBirth}
    </div>
  </td>
  )
}

export default PersonInfoCell
