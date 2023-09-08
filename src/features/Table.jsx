import TableRow from '../components/TableRow'

const  Table = (data) => {
    return (
        <table className="w-full table-auto my-10 ">
            <thead className='bg-zinc-900 text-yellow-400'>
                <th className='py-2'>
                    Información
                </th>
                <th className='pl-2 pr-4'>
                    GBA Estatus
                </th>
            </thead>
            <tbody>
            {data.data.map((item, index) => (
          <TableRow key={index} dni={item.dni} name={item.name} surName={item.lastname} dateOfBirth={item.birth_day} isGBA={item.is_gba}  />
        ))}

            </tbody>
            
        </table>
    )

}

export default Table