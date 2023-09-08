import React from 'react';
import './Loader.css'; // Importa el archivo CSS personalizado

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen max-h-80">
      <div className="loader-container">
        <div className="loader ease-linear rounded-full border-t-4 border-yellow-500 h-12 w-12 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
