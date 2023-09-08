Proyecto de Filtrado de Usuarios con React y Axios
Este proyecto es una aplicación web simple que utiliza React para el frontend y Axios para realizar llamadas al backend. Permite filtrar usuarios en una tabla y mostrarlos en función de los criterios de filtro especificados.

Requisitos
Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo e instalarlo desde nodejs.org.

Configuración
Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

Clona el repositorio:

bash

git clone <URL del repositorio>
Instala las dependencias:

Navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

bash

cd nombre-del-proyecto
npm install
Configura la URL del Backend:

Abre el archivo App.js en la carpeta src y asegúrate de que la URL del backend esté configurada correctamente en la variable url.

javascript

Recuerda que al usar Tailwinds tienes que Genera un archivo de configuración, para ello ejecuta el siguiente comando:

npx tailwindcss init -p



Ejecuta la aplicación:

Una vez que hayas configurado la URL del backend, puedes ejecutar la aplicación con el siguiente comando:

bash

npm start
Esto iniciará la aplicación React en modo de desarrollo y se abrirá en tu navegador predeterminado. Si se utiliza un puerto diferente en el backend, asegúrate de configurarlo en la variable url.

Uso
Accede a la aplicación en tu navegador.

Utiliza el formulario de filtro en la parte superior de la página para especificar tus criterios de filtro. Puedes seleccionar una fecha de inicio, una fecha de fin y marcar la casilla "Es de GBA" si es necesario.

Haz clic en el botón "Filtrar" para enviar la solicitud al backend y obtener los resultados filtrados.

Los usuarios que cumplan con los criterios de filtro se mostrarán en la tabla debajo del formulario.

Tecnologías Utilizadas
React
Axios