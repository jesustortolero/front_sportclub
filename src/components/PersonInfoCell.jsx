import { useEffect, useState } from "react"

const PersonInfoCell = ({ dni, name, surName, dateOfBirth }) => {
  return (
  <td className="p-4">
    <div className="pb-1">
      <span className="font-bold">Name: </span>{name} {surName}
    </div>
    <div className="pb-1">
    <span className="font-bold">DNI: </span>{dni}
    </div>
    <div className="pb-1">
    <span className="font-bold">Fecha de nacimiento: </span>{dateOfBirth}
    </div>
  </td>
  )
}

export default PersonInfoCell
