const InstructionMessage = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
        ¡Bienvenido a nuestra aplicación!
      </h2>
      <p className="text-lg">
        La siguiente interfaz es una aplicación que te permite filtrar
        suscriptores según su fecha de nacimiento y si residen en GBA (Gran
        Buenos Aires) o no.
      </p>
      <p className="text-lg mt-1">
        Para utilizarla, simplemente sigue estos pasos:
        <ol className="list-decimal p-6">
          <li>
          selecciona en el dropdown una fecha de inicio del rango (recuerda que el rango es por fecha de nacimiento)
          </li>
          <li>
          Selecciona una fecha de fin en el menú desplegable. Si no seleccionas una fecha, se aplicará automáticamente la fecha actual.
          </li>
          <li>
          Por último, puedes aplicar un filtro para ver solo usuarios que sean de GBA seleccionando la casilla 'Es de GBA' si así lo deseas.
          </li>
        </ol>

        Recuerda que si haces un envío sin seleccionar un rango ni aplicar el filtro, se mostrará una lista de usuarios sin restricciones. 
      </p>
    </div>
  );
};

export default InstructionMessage;
