import PersonInfoCell from './PersonInfoCell'
import IsGBACell from './IsGBACell'

const TableRow = ({dni, name, surName, dateOfBirth, isGBA}) => {


  return (
    <tr className='border-b-2 border-b-gray-400 even:bg-gray-700 odd:bg-gray-600 text-white'>
      <PersonInfoCell dni={dni} name={name} surName={surName} dateOfBirth={dateOfBirth} />
      <IsGBACell isGBA = {isGBA} />
    </tr>
  );
};

export default TableRow;
