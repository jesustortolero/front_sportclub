import './IsGBACell.css'

const IsGBACell = (isGBA ) =>{
    return <td className="gba-cell">{isGBA.isGBA  ? 'Afiliado' : 'No Afiliado'}</td>
}

export default IsGBACell