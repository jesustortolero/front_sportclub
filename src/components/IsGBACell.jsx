import { useEffect, useState } from "react"

const IsGBACell = (isGBA ) =>{
    return <td className="text-center font-bold">{isGBA.isGBA  ? 'Afiliado' : 'No Afiliado'}</td>
}

export default IsGBACell